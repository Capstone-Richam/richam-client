/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useRef } from "react";

import ClipLoader from "react-spinners/ClipLoader";
import { useRecoilValue } from "recoil";
import { useSetRecoilState } from "recoil";

import { useGetInfiniteMailList } from "@/api/query";
import { LoadingState } from "@/recoil/atom";
import { MailFilterType } from "@/types";

import Mail from "./Mail";
import * as styles from "./MailList.style";

export interface MailListProps {
  type: MailFilterType;
  keywords?: string[];
}

const MailList = ({ type, keywords }: MailListProps) => {
  const {
    data,
    fetchNextPage: fetchNextMailList,
    hasNextPage,
  } = useGetInfiniteMailList({ type, keywords });
  const mails = data?.pages.flatMap((page) => page.content) ?? [];
  const loading = useRecoilValue(LoadingState);

  const observerRef = useRef<IntersectionObserver | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);
  const setLoading = useSetRecoilState(LoadingState);

  useEffect(() => {
    if (!targetRef.current) return;
    observerRef.current = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        if (entries[0].isIntersecting && hasNextPage) fetchNextMailList();
      },
      { threshold: 0 }
    );
    observerRef.current.observe(targetRef.current);
    return () => {
      if (observerRef.current && targetRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observerRef.current.unobserve(targetRef.current);
      }
    };
  }, [targetRef, fetchNextMailList, hasNextPage, setLoading]);

  if (mails.length == 0) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <ClipLoader
          color="#fff"
          loading={loading}
          size={170}
        />
      </div>
    );
  } else {
    return (
      <styles.ListWrapper>
        {mails.map((mail) => (
          <Mail
            key={mail.mailId}
            id={mail.mailId}
            type={mail.type}
            title={mail.title}
            fromPerson={mail.fromPerson}
            date={mail.date}
          />
        ))}
        <styles.Box ref={targetRef} />
      </styles.ListWrapper>
    );
  }
};

export default MailList;
