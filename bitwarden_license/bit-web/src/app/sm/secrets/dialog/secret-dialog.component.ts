import { DialogRef, DIALOG_DATA } from "@angular/cdk/dialog";
import { Component, Inject, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { I18nService } from "@bitwarden/common/abstractions/i18n.service";
import { LogService } from "@bitwarden/common/abstractions/log.service";
import { PlatformUtilsService } from "@bitwarden/common/abstractions/platformUtils.service";
import { SecretView } from "@bitwarden/common/models/view/secretView";

import { SecretService } from "../secret.service";

export enum OperationType {
  Add,
  Edit,
}

interface SecretOperation {
  organizationId: string;
  operation: OperationType;
  secretId?: string;
}

@Component({
  selector: "sm-secret-dialog",
  templateUrl: "./secret-dialog.component.html",
})
export class SecretDialogComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl("", [Validators.required]),
    value: new FormControl("", [Validators.required]),
    notes: new FormControl(""),
  });

  constructor(
    public dialogRef: DialogRef,
    @Inject(DIALOG_DATA) private data: SecretOperation,
    private secretService: SecretService,
    private i18nService: I18nService,
    private platformUtilsService: PlatformUtilsService,
    private logService: LogService
  ) {}

  async ngOnInit() {
    if (this.data?.operation === OperationType.Edit && this.data?.secretId) {
      await this.loadData();
    } else if (this.data?.operation !== OperationType.Add) {
      throw new Error(`The secret dialog was not called with the appropriate operation values.`);
    }
  }

  async loadData() {
    const secret: SecretView = await this.secretService.getBySecretId(this.data?.secretId);
    this.form.setValue({ name: secret.name, value: secret.value, notes: secret.note });
  }

  get title() {
    if (this.data?.operation === OperationType.Add) {
      return "addSecret";
    }
    return "editSecret";
  }

  async onSave() {
    if (this.data?.operation === OperationType.Add) {
      await this.createSecret();
    } else if (this.data?.operation === OperationType.Edit && this.data?.secretId) {
      await this.updateSecret();
    }
  }

  private async createSecret() {
    try {
      const secretView = this.getSecretView();
      await this.secretService.create(this.data?.organizationId, secretView);
      this.dialogRef.close();
      this.platformUtilsService.showToast("success", null, this.i18nService.t("secretCreated"));
    } catch (e) {
      this.logService.error(e);
      this.dialogRef.close();
      this.showErrorToast();
    }
  }

  private async updateSecret() {
    try {
      const secretView = this.getSecretView();
      secretView.id = this.data?.secretId;
      await this.secretService.update(this.data?.organizationId, secretView);
      this.dialogRef.close();
      this.platformUtilsService.showToast("success", null, this.i18nService.t("secretEdited"));
    } catch (e) {
      this.logService.error(e);
      this.dialogRef.close();
      this.showErrorToast();
    }
  }

  private getSecretView() {
    const secretView = new SecretView();
    secretView.organizationId = this.data?.organizationId;
    secretView.name = this.form.value.name;
    secretView.value = this.form.value.value;
    secretView.note = this.form.value.notes;
    return secretView;
  }

  private showErrorToast() {
    const title = this.i18nService.t("errorOccurred");
    const text = this.i18nService.t("unexpectedError");
    this.platformUtilsService.showToast("error", title, text);
  }
}
