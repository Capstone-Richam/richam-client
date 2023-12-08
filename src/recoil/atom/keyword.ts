import { atom } from "recoil";

export const keyWordArrayState = atom<Array<string>>({
  key: "keyWordArray",
  default: [],
});
