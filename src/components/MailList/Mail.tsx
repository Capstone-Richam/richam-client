/* eslint-disable @typescript-eslint/no-explicit-any */

import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

import GoogleLogo from "@/assets/google-circle-logo.svg";
import NaverLogo from "@/assets/naver-circle-logo.svg";

import * as styles from "./MailList.style";
import { convertToLabel } from "./constant";

export interface MailProps {
  id: number;
  type: "NAVER" | "GOOGLE" | "ALL";
  fromPerson: string;
  title: string;
  date: Date;
}

const Mail = ({ id, type, fromPerson, title, date }: MailProps) => {
  const navigate = useNavigate();

  return (
    <styles.MailWrapper onClick={() => navigate(`/${id}`)}>
      <img src={type === "GOOGLE" ? GoogleLogo : NaverLogo} />
      <styles.Text className="from">{convertToLabel(fromPerson)}</styles.Text>
      <styles.Text className="title">{title}</styles.Text>
      <styles.Text className="date">{dayjs(date).format("YYYY/MM/DD hh:mm")}</styles.Text>
    </styles.MailWrapper>
  );
};

export default Mail;
