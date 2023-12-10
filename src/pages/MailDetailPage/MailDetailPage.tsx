import dayjs from "dayjs";
import { useParams } from "react-router-dom";

import { useGetMailDetailInfo } from "@/api/query";

import * as styles from "./MailDetailPage.style";

const MailDetailPage = () => {
  const { mailid: id } = useParams();
  const { data } = useGetMailDetailInfo({ id: Number(id) });

  return (
    <>
      {data && (
        <styles.Container>
          <styles.Title>{data.mailInfo.title}</styles.Title>
          <styles.Description>
            {data.mailInfo.fromPerson} •{" "}
            {dayjs(data.mailInfo.date).format("YYYY년 MM월 DD일 hh시 mm분")}
          </styles.Description>
          {data.content && data.content.length > 1 ? (
            <styles.Content dangerouslySetInnerHTML={{ __html: data.content }} />
          ) : (
            <>메일을 불러오는 데 실패했어요 🥹</>
          )}
        </styles.Container>
      )}
    </>
  );
};

export default MailDetailPage;
