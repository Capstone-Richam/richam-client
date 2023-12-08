import { useInfiniteQuery } from "@tanstack/react-query";

import { getMailListAysnc } from "./mail";

/** 메일 목록 조회 무한 스크롤 구현을 위한 hook */
export const useGetInfiniteMailList = ({ type }: { type: "ALL" | "GOOGLE" | "NAVER" }) =>
  useInfiniteQuery({
    queryKey: ["mail-list", type],
    queryFn: ({ pageParam }) => getMailListAysnc({ type, page: pageParam?.page }),
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
