export type MailFilterType = "ALL" | "GOOGLE" | "NAVER" | "KEYWORD";

export interface MailInfo {
  mailId: number;
  type: "GOOGLE" | "NAVER" | "ALL";
  title: string;
  fromPerson: string;
  date: Date;
}

export interface MailListResponse {
  /** 메일 목록 데이터  */
  content: MailInfo[];
  /** 현재 데이터의 페이지 수 */
  page: number;
  /** 다음 페이지 존재 유무 */
  hasNextPage: boolean;
}
