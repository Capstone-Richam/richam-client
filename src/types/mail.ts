export type MailFilterType = "all" | "naver" | "google" | "keyword";

export interface MailInfo {
  id: number;
  type: "google" | "naver";
  title: string;
  fromPerson: string;
  date: string | null;
}
