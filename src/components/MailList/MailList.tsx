/* eslint-disable @typescript-eslint/no-explicit-any */

import { MailInfo } from "@/types";

import Mail from "./Mail";
import * as styles from "./MailList.style";

export interface MailListProps {
  data: MailInfo[];
}

const MailList = ({ data }: MailListProps) => (
  <styles.ListWrapper>
    {data.map((mail) => (
      <Mail
        id={mail.id}
        type={mail.type}
        title={mail.title}
        fromPerson={mail.fromPerson}
        date={mail.date || ""}
      />
    ))}
  </styles.ListWrapper>
);

export default MailList;
