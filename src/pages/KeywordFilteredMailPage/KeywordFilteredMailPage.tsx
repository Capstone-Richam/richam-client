import React from "react";

import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import plus from "@/assets/plus.svg";
import Keyword from "@/components/Keyword";
import MailList from "@/components/MailList";
import { maillistDummyData } from "@/dummy";
import { keyWordArrayState } from "@/recoil/atom/keyword";

import * as styles from "./KeywordFilteredMailPage.style";

const KeywordFilteredMailPage = () => {
  const keywordArray = useRecoilValue(keyWordArrayState);
  const navigate = useNavigate();
  return (
    <styles.Container>
      <styles.Title>키워드 메일</styles.Title>
      <styles.Description>
        등록해주신 키워드 메일만 필터링해서 보여드리고 있어요. 키워드는 언제든지 추가 및 삭제하실 수
        있어요!
      </styles.Description>
      <styles.KeywordWrapper>
        <styles.KeywordBox>
          {keywordArray.map((item, idx) => (
            <React.Fragment key={idx}>
              <Keyword
                keyword={item}
                state={false}
              />
            </React.Fragment>
          ))}
        </styles.KeywordBox>
        <styles.KeywordBtn onClick={() => navigate("/keyword/new")}>
          <img src={plus}></img>키워드 등록하기
        </styles.KeywordBtn>
      </styles.KeywordWrapper>
      <MailList data={maillistDummyData} />
    </styles.Container>
  );
};

export default KeywordFilteredMailPage;
