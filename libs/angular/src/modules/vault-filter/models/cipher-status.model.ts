import { CipherType } from "@bitwarden/common/enums/cipherType";
import { ITreeNodeObject } from "@bitwarden/common/models/domain/treeNode";

export type CipherFilter = ITreeNodeObject & CipherStatus;
export type CipherStatus = "all" | "favorites" | "trash" | CipherType;
