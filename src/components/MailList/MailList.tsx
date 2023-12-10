/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useRef } from "react";

import ClipLoader from "react-spinners/ClipLoader";
import { useRecoilState } from "recoil";

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
    isLoading,
    fetchNextPage: fetchNextMailList,
    hasNextPage,
  } = useGetInfiniteMailList({ type, keywords });
  const mails = data?.pages.flatMap((page) => page.content) ?? [];
  const [loading, setLoading] = useRecoilState(LoadingState);

  const observerRef = useRef<IntersectionObserver | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);

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

  if (isLoading) {
    return (
      <styles.LoaderWrapper>
        <ClipLoader
          color="#fff"
          loading={loading}
          size={150}
        />
      </styles.LoaderWrapper>
    );
  }

  return (
    <>
      {mails.length <= 0 ? (
        <styles.EmptyContent>메일 데이터가 존재하지 않아요!</styles.EmptyContent>
      ) : (
        <styles.ListWrapper>
          {mails.map((mail) => (
            <Mail
              key={mail.mailId}
              mailId={mail.mailId}
              type={mail.type}
              title={mail.title}
              fromPerson={mail.fromPerson}
              date={mail.date}
              keyword={mail.keyword}
            />
          ))}
          <styles.Box ref={targetRef} />
        </styles.ListWrapper>
      )}
    </>
  );
};

export default MailList;
