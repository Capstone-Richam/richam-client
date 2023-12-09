import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

import { MailFilterType } from "@/types";

import { getFilteredMailListAsync, getMailDetailInfoAsync, getMailListAysnc } from "./mail";

/** 메일 목록 조회 무한 스크롤 구현을 위한 hook */
export const useGetInfiniteMailList = ({
  type,
  keywords, // 필터링 시
}: {
  type: MailFilterType;
  keywords?: string[];
}) =>
  useInfiniteQuery({
    queryKey: ["mail-list", type],
    queryFn: ({ pageParam }) =>
      type !== "KEYWORD"
        ? getMailListAysnc({ type, page: pageParam?.page })
        : getFilteredMailListAsync({ keywords: keywords || [], page: pageParam?.page }),
    initialPageParam: { page: 0 },
    getNextPageParam: (lastPage) => {
      if (lastPage.hasNextPage) {
        return {
          page: lastPage.page + 1,
        };
      }
      return undefined;
    },
  });

export const useGetMailDetailInfo = ({ id }: { id: number }) =>
  useQuery({
    queryKey: ["mail-info", id],
    queryFn: () => getMailDetailInfoAsync(id),
    staleTime: Infinity, // 메일 내용은 업데이트될 일이 없으므로 서버에 다시 요청 안해도 됨.
  });
