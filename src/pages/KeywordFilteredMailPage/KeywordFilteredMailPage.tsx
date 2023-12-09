import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import { getKeywords } from "@/api/keyword";
import Keyword from "@/components/Keyword";
import MailList from "@/components/MailList";
import { keyWordArrayState } from "@/recoil/atom/keyword";

import * as styles from "./KeywordFilteredMailPage.style";

const KeywordFilteredMailPage = () => {
  const [keywordArray, setKeywordArray] = useRecoilState(keyWordArrayState);
  const navigate = useNavigate();

  useEffect(() => {
    getKeywords()
      .then((res) => setKeywordArray(res.data.data))
      .catch((err) => console.log(err));
  }, [setKeywordArray]);

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
                state={true}
              />
            </React.Fragment>
          ))}
        </styles.KeywordBox>
      </styles.KeywordWrapper>
      {keywordArray.length > 0 ? (
        <MailList
          type="KEYWORD"
          keywords={keywordArray}
        />
      ) : (
        <styles.KeywordWarningWrapper>
          현재 등록되어 있는 키워드가 없어요!
          <styles.KeywordBtn onClick={() => navigate("/keyword/new")}>
            키워드 등록하러가기
          </styles.KeywordBtn>
        </styles.KeywordWarningWrapper>
      )}
    </styles.Container>
  );
};

export default KeywordFilteredMailPage;
