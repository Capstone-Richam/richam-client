/* eslint-disable @typescript-eslint/no-explicit-any */

import { useNavigate } from "react-router-dom";

import GoogleLogo from "@/assets/google-circle-logo.svg";
import NaverLogo from "@/assets/naver-circle-logo.svg";

import * as styles from "./MailList.style";

export interface MailProps {
  id: number;
  type: "naver" | "google";
  fromPerson: string;
  title: string;
  date: string;
}

const Mail = ({ id, type, fromPerson, title, date }: MailProps) => {
  const navigate = useNavigate();

  return (
    <styles.MailWrapper onClick={() => navigate(`/${id}`)}>
      <img src={type === "google" ? GoogleLogo : NaverLogo} />
      <styles.Text className="from">{fromPerson}</styles.Text>
      <styles.Text className="title">{title}</styles.Text>
      <styles.Text className="date">{date}</styles.Text>
    </styles.MailWrapper>
  );
};

export default Mail;
