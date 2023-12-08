import { MailListResponse } from "@/types";

import { getAsync } from ".";

interface MailListRequest {
  type?: "ALL" | "GOOGLE" | "NAVER";
  page: number;
}

/** 메일 목록 조회하는 함수 */
export async function getMailListAysnc({
  type = "GOOGLE",
  page,
}: MailListRequest): Promise<MailListResponse> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data } = await getAsync<any>("/mail/header", {
    params: { memberId: 1, type: type.toUpperCase(), page },
  });

  return {
    content: data?.content,
    page: data.pageable?.pageNumber,
    hasNextPage: !data.last,
  };
}
