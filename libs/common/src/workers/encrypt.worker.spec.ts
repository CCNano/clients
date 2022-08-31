import { mock, MockProxy } from "jest-mock-extended";

import { CipherData } from "../models/data/cipherData";
import { EncString } from "../models/domain/encString";
import { SymmetricCryptoKey } from "../models/domain/symmetricCryptoKey";
import { ContainerService } from "../services/container.service";
import { EncryptService } from "../services/encrypt.service";

import { EncryptWorker } from "./encrypt.worker";
import { DecryptCipherRequest } from "./workerRequestResponse";

describe("EncryptWorker", () => {
  beforeEach(() => {
    (window as any).bitwardenContainerService = null;
  });

  it("initialises ContainerService", () => {
    EncryptWorker.init();

    const containerService: ContainerService = (window as any).bitwardenContainerService;
    expect(() => containerService.getEncryptService()).not.toThrow();
    expect(containerService.getEncryptService()).toBeDefined();
  });

  describe("decryptCiphers", () => {
    let containerService: MockProxy<ContainerService>;
    let encryptService: MockProxy<EncryptService>;

    beforeEach(() => {
      containerService = mock<ContainerService>();
      encryptService = mock<EncryptService>();

      containerService.getEncryptService.mockReturnValue(encryptService);
      encryptService.decryptToUtf8.mockResolvedValue("DecryptedString");
    });

    it("decrypts personal ciphers", async () => {
      (window as any).bitwardenContainerService = containerService;

      const cipherData = {
        id: "cipher1",
        organizationId: null,
        name: "EncryptedString",
      } as CipherData;
      const userKey = mock<SymmetricCryptoKey>();
      const request = new DecryptCipherRequest(
        "requestId",
        {
          cipher1: cipherData,
        },
        {
          cipher1: {
            lastLaunched: 123,
          },
        },
        userKey,
        null
      );

      const result = await EncryptWorker.decryptCiphers(request);

      expect(encryptService.decryptToUtf8).toHaveBeenCalledWith(expect.any(EncString), userKey);
      expect(result[0]).toMatchObject({
        id: "cipher1",
        name: "DecryptedString",
        localData: {
          lastLaunched: 123,
        },
      });
    });

    it("decrypts organization ciphers", async () => {
      (window as any).bitwardenContainerService = containerService;

      const cipherData = {
        id: "cipher1",
        organizationId: "orgId",
        name: "EncryptedString",
      } as CipherData;
      const orgKey = mock<SymmetricCryptoKey>();
      const request = new DecryptCipherRequest(
        "id",
        {
          cipher1: cipherData,
        },
        {
          cipher1: {
            lastLaunched: 123,
          },
        },
        mock<SymmetricCryptoKey>(),
        {
          orgId: orgKey,
        }
      );

      const result = await EncryptWorker.decryptCiphers(request);

      expect(encryptService.decryptToUtf8).toHaveBeenCalledWith(expect.any(EncString), orgKey);
      expect(result[0]).toMatchObject({
        id: "cipher1",
        name: "DecryptedString",
        localData: {
          lastLaunched: 123,
        },
      });
    });

    it("throws if a key is not provided", async () => {
      const cipherData = {
        id: "cipher1",
        organizationId: "orgId",
        name: "EncryptedString",
      } as CipherData;

      const request = new DecryptCipherRequest(
        "id",
        {
          [cipherData.id]: cipherData,
        },
        {},
        mock<SymmetricCryptoKey>(),
        null
      );

      expect.assertions(1);
      await expect(EncryptWorker.decryptCiphers(request)).rejects.toThrow(
        "No key provided for " + cipherData.id
      );
    });
  });
});