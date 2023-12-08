import { useRecoilValue } from "recoil";

import MailList from "@/components/MailList";
import { MailFilterAtom } from "@/recoil/atom/mail";
import { MailFilterType } from "@/types";

import * as styles from "./MainPage.style";
import { maillistDummyData } from "./dummy";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const INFO: Record<any, { title: string; description: string }> = {
  all: {
    title: "전체",
    description:
      "당신의 모든 메일을 보여주고 있어요. 현재 저희 서비스는 구글과 네이버만 지원 중에요.",
  },
  naver: { title: "네이버", description: "당신의 네이버 메일이에요." },
  google: { title: "구글", description: "당신의 구글 메일이에요." },
};

const MainPage = () => {
  const mailFilter = useRecoilValue<MailFilterType>(MailFilterAtom);

  return (
    <styles.Container>
      <styles.Title>{INFO[mailFilter].title} 메일</styles.Title>
      <styles.Description>{INFO[mailFilter].description}</styles.Description>
      <MailList data={maillistDummyData} />
    </styles.Container>
  );
};

export default MainPage;
