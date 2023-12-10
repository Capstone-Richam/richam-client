/* eslint-disable @typescript-eslint/no-explicit-any */
import { MailDetailInfoResponse, MailListResponse } from "@/types";

import { ApiResponse, getAsync, postAsync } from ".";

interface MailListRequest {
  type?: "ALL" | "GOOGLE" | "NAVER";
  page: number;
}

/** 메일 목록 조회하는 함수 */
export async function getMailListAysnc({
  type = "ALL",
  page,
}: MailListRequest): Promise<MailListResponse> {
  const { data } = await getAsync<any>("/mail/header", {
    params: { memberId: 1, type: type.toUpperCase(), page },
  });

  if (page == 0) {
    updateImapMailAsync("NAVER");
    updateImapMailAsync("GOOGLE");
  }

  return {
    content: data?.content,
    page: data.pageable?.pageNumber,
    hasNextPage: !data.last,
  };
}

/** 키워드 기반으로 필터링 된 메일 목록을 조회하는 함수 */
export async function getFilteredMailListAsync({
  keywords,
  page,
}: {
  keywords: string[];
  page: number;
}): Promise<MailListResponse> {
  const { data } = await postAsync<any, { keywords: string[] }>(
    "/filter",
    { keywords },
    {
      params: { page },
    }
  );
  return {
    content: data?.content,
    page: data.pageable?.pageNumber,
    hasNextPage: !data.last,
  };
}

/** 메일 상세 데이터 조회하는 함수 */
export async function getMailDetailInfoAsync(id: number): Promise<MailDetailInfoResponse> {
  const { data } = await getAsync<ApiResponse<MailDetailInfoResponse>>(`/mail/detail/${id}`);

  return data;
}

/** 메일 불러오기 IMAP */
export const updateImapMailAsync = async (type: string) => {
  const res = await getAsync(`/mail/mails?type=${type}`, {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: `Bearer ${localStorage.accessToken}`,
    },
  });
  return res;
};
