/* eslint-disable @typescript-eslint/no-explicit-any */

import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

import GoogleLogo from "@/assets/google-circle-logo.svg";
import NaverLogo from "@/assets/naver-circle-logo.svg";
import { MailInfo } from "@/types";

import * as styles from "./MailList.style";
import { convertToLabel } from "./constant";

const Mail = ({ mailId, type, fromPerson, title, date, keyword }: MailInfo) => {
  const navigate = useNavigate();

  return (
    <styles.MailWrapper onClick={() => navigate(`/${mailId}`)}>
      <img src={type === "GOOGLE" ? GoogleLogo : NaverLogo} />
      <styles.Text className="from">{convertToLabel(fromPerson)}</styles.Text>
      <styles.TitleWrapper>
        {keyword && <div className="keyword">{keyword}</div>}
        <styles.Text className="title">{title}</styles.Text>
      </styles.TitleWrapper>
      <styles.Text className="date">{dayjs(date).format("YYYY/MM/DD hh:mm")}</styles.Text>
    </styles.MailWrapper>
  );
};

export default Mail;
