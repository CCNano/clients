import { AuthService } from "@bitwarden/common/abstractions/auth.service";
import { CipherService } from "@bitwarden/common/abstractions/cipher.service";
import { CryptoService } from "@bitwarden/common/abstractions/crypto.service";
import { PlatformUtilsService } from "@bitwarden/common/abstractions/platformUtils.service";
import { AuthenticationStatus } from "@bitwarden/common/enums/authenticationStatus";
import { StateFactory } from "@bitwarden/common/factories/stateFactory";
import { Utils } from "@bitwarden/common/misc/utils";
import { GlobalState } from "@bitwarden/common/models/domain/globalState";
import { ContainerService } from "@bitwarden/common/services/container.service";

import IconDetails from "src/background/models/iconDetails";

import { authServiceFactory } from "../background/service_factories/auth-service.factory";
import { cipherServiceFactory } from "../background/service_factories/cipher-service.factory";
import { platformUtilsServiceFactory } from "../background/service_factories/platform-utils-service.factory";
import { stateServiceFactory } from "../background/service_factories/state-service.factory";
import { BrowserApi } from "../browser/browserApi";
import { Account } from "../models/account";
import { StateService } from "../services/abstractions/state.service";

export class UpdateBadge {
  private authService: AuthService;
  private platformUtilsService: PlatformUtilsService;
  private stateService: StateService;
  private cipherService: CipherService;
  private badgeAction: any;
  private sidebarAction: any;

  private static readonly listenedToCommands = [
    "updateBadge",
    "loggedIn",
    "unlocked",
    "syncCompleted",
    "bgUpdateContextMenu",
    "editedCipher",
    "addedCipher",
    "deletedCipher",
  ];

  static async tabsOnActivatedListener(activeInfo: chrome.tabs.TabActiveInfo) {
    await new UpdateBadge().initServices().then((x) => x.run({ tabId: activeInfo.tabId }));
  }

  static async tabsOnReplacedListener(addedTabId: number, removedTabId: number) {
    await new UpdateBadge().initServices().then((x) => x.run({ tabId: addedTabId }));
  }

  static async tabsOnUpdatedListener(tabId: number) {
    await new UpdateBadge().initServices().then((x) => x.run({ tabId }));
  }

  static async messageListener(
    serviceCache: Record<string, unknown>,
    message: { command: string; tabId: number }
  ) {
    if (!UpdateBadge.listenedToCommands.includes(message.command)) {
      return;
    }

    await new UpdateBadge(serviceCache).initServices().then((x) => x.run());
  }

  constructor(existingServiceCache?: Record<string, unknown>) {
    //eslint-disable-next-line no-console
    console.log("UpdateBadge");
  }

  async initServices(existingServiceCache?: Record<string, unknown>): Promise<UpdateBadge> {
    const serviceCache: Record<string, unknown> = existingServiceCache || {};
    const opts = {
      cryptoFunctionServiceOptions: { win: self },
      encryptServiceOptions: { logMacFailures: false },
      logServiceOptions: { isDev: false },
      platformUtilsServiceOptions: {
        clipboardWriteCallback: (clipboardValue: string, clearMs: number) =>
          Promise.reject("not implemented"),
        biometricCallback: () => Promise.reject("not implemented"),
        win: self,
      },
      stateServiceOptions: {
        stateFactory: new StateFactory(GlobalState, Account),
      },
      stateMigrationServiceOptions: {
        stateFactory: new StateFactory(GlobalState, Account),
      },
      apiServiceOptions: {
        logoutCallback: () => Promise.reject("not implemented"),
      },
      keyConnectorServiceOptions: {
        logoutCallback: () => Promise.reject("not implemented"),
      },
      i18nServiceOptions: {
        systemLanguage: BrowserApi.getUILanguage(self),
      },
      cipherServiceOptions: {
        searchServiceFactory: null as any, // Do not initialize searchService here.
      },
    };
    this.platformUtilsService = await platformUtilsServiceFactory(serviceCache, opts);
    this.stateService = await stateServiceFactory(serviceCache, opts);
    this.authService = await authServiceFactory(serviceCache, opts);
    this.cipherService = await cipherServiceFactory(serviceCache, opts);

    this.badgeAction = chrome.action;
    this.sidebarAction = this.platformUtilsService.isSafari()
      ? null
      : typeof opr !== "undefined" && opr.sidebarAction
      ? opr.sidebarAction
      : (self as any).chrome.sidebarAction;

    // TODO: init bitwardenContainerService
    if (!self.bitwardenContainerService) {
      new ContainerService(serviceCache.cryptoService as CryptoService).attachToGlobal(self);
    }

    return this;
  }

  async run(opts?: { tabId?: number; windowId?: number }): Promise<void> {
    //eslint-disable-next-line no-console
    console.log("UpdateBadge.run");

    const authStatus = await this.authService.getAuthStatus();

    switch (authStatus) {
      case AuthenticationStatus.LoggedOut: {
        await this.setBadgeIcon("_gray", opts?.windowId);
        await this.setBadgeText("", opts?.tabId);
        break;
      }
      case AuthenticationStatus.Locked: {
        await this.setBadgeIcon("_locked", opts?.windowId);
        await this.setBadgeText("", opts?.tabId);
        break;
      }
      case AuthenticationStatus.Unlocked: {
        await this.setBadgeIcon("", opts?.windowId);

        const disableBadgeCounter = await this.stateService.getDisableBadgeCounter();
        if (disableBadgeCounter) {
          break;
        }

        const tabs = await BrowserApi.getActiveTabs();
        let url: string;
        if (opts?.tabId && tabs.some((tab) => tab.id === opts?.tabId)) {
          url = tabs.find((tab) => tab.id === opts?.tabId)?.url;
        } else if (opts?.windowId && tabs.some((tab) => tab.windowId === opts?.windowId)) {
          url = tabs.find((tab) => tab.windowId === opts?.windowId)?.url;
        } else {
          url = (await this.currentTab())?.url;
        }

        const ciphers = await this.cipherService.getAllDecryptedForUrl(url);
        let countText = ciphers.length == 0 ? "" : ciphers.length.toString();
        if (ciphers.length > 9) {
          countText = "9+";
        }
        await this.setBadgeText(countText, opts?.tabId);
        break;
      }
    }
  }

  private async currentTab() {
    const queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    const [tab] = await chrome.tabs.query(queryOptions);
    return tab;
  }

  setBadgeBackgroundColor(color = "#294e5f") {
    //eslint-disable-next-line no-console
    console.log("UpdateBadge.setBadgeBackgroundColor");

    this.badgeAction?.setBadgeBackgroundColor?.call({ color });
    this.sidebarAction?.setBadgeBackgroundColor?.call({ color });
  }

  setBadgeText(text: string, tabId?: number) {
    //eslint-disable-next-line no-console
    console.log("UpdateBadge.setBadgeText\t" + text + "\t" + tabId);

    if (this.badgeAction?.setBadgeText) {
      this.badgeAction.setBadgeText({ text, tabId });
    }

    if (this.sidebarAction?.setBadgeText) {
      this.sidebarAction?.setBadgeText({ text, tabId });
    } else if (this.sidebarAction?.setTitle) {
      const title = `Bitwarden${Utils.isNullOrEmpty(text) ? "" : ` [${text}]`}`;
      this.sidebarAction?.setTitle({ title, tabId });
    }
  }

  async setBadgeIcon(iconSuffix: string, windowId?: number) {
    //eslint-disable-next-line no-console
    console.log("UpdateBadge.setBadgeIcon\t" + iconSuffix + "\t" + windowId);

    const options: IconDetails = {
      path: {
        19: "images/icon19" + iconSuffix + ".png",
        38: "images/icon38" + iconSuffix + ".png",
      },
    };

    if (this.platformUtilsService.isFirefox()) {
      options.windowId = windowId;
    }

    if (this.platformUtilsService.isSafari()) {
      // Workaround since Safari 14.0.3 returns a pending promise
      // which doesn't resolve within a reasonable time.
      this.badgeAction?.setIcon?.call(options);
      this.sidebarAction?.setIcon?.call(options);
    } else {
      if (this.badgeAction?.setIcon) {
        await this.badgeAction.setIcon(options);
      } else if (this.badgeAction?.setBadgeIcon) {
        await this.badgeAction.setBadgeIcon(options);
      }
      if (this.sidebarAction?.setBadgeIcon) {
        await this.sidebarAction.setBadgeIcon(options);
      }
    }
  }
}
