import { atom } from "recoil";

import { MailFilterType } from "@/types";

export const MailFilterAtom = atom<MailFilterType>({
  key: "mail-filter-atom",
  default: "ALL",
});
