import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";

import { useRecoilState } from "recoil";

import { getKeywords, patchKeyword } from "@/api/keyword";
import plus from "@/assets/plus.svg";
import Input from "@/components/Input";
import Keyword from "@/components/Keyword";
import { keyWordArrayState } from "@/recoil/atom/keyword";

import * as styles from "./KeywordRegisterPage.style";
import { keywordDummyData } from "./keywordDummyData";

const KeywordRegisterPage = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [keywordBtn, setKeywordBtn] = useState<boolean>(true);
  const [keywordArray, setKeywordArray] = useRecoilState(keyWordArrayState);

  const KeywordChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 0) {
      setKeywordBtn(false);
    } else {
      setKeywordBtn(true);
    }
    setKeyword(e.target.value);
  };

  const handleOnKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      AddKeyword();
    }
  };

  const AddKeyword = () => {
    patchKeyword(keyword).then(() => {
      setKeywordArray([...keywordArray, keyword]);
      setKeyword(""); //서버 퉁신
    });
  };
  const AddBtnKeyword = (item: string) => {
    patchKeyword(item)
      .then(() => {
        setKeywordArray([...keywordArray, item]);
        setKeyword("");
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getKeywords()
      .then((res) => {
        setKeywordArray(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [setKeywordArray]);
  return (
    <styles.Container>
      <styles.Title>관심 키워드 등록</styles.Title>
      <styles.Description>
        관심 있는 키워드를 등록하면 관련 메일을 따로 확인하실 수 있어요!
      </styles.Description>
      <styles.inputContainer>
        <styles.Keywordinput>
          <Input
            type="text"
            value={keyword}
            onChange={KeywordChange}
            placeholder="키워드를 추가해보세요."
            name="keyword"
            onKeyDown={handleOnKeyPress}
          />
        </styles.Keywordinput>
        <styles.KeywordBtn
          onClick={AddKeyword}
          disabled={keywordBtn}
        >
          <img src={plus}></img>키워드 추가
        </styles.KeywordBtn>
      </styles.inputContainer>
      <styles.ReigsterKeywordWrapper>
        <styles.ReigsterKeywordTitle>등록 키워드</styles.ReigsterKeywordTitle>
        <styles.ReigsterKeywordBox>
          <styles.ReigsterKeywordInnerBox>
            {keywordArray.map((item, idx) => (
              <React.Fragment key={idx}>
                <Keyword
                  keyword={item}
                  state={true}
                />
              </React.Fragment>
            ))}
          </styles.ReigsterKeywordInnerBox>
        </styles.ReigsterKeywordBox>
      </styles.ReigsterKeywordWrapper>
      <styles.RecommendKeywordWrapper>
        <styles.RecommendKeywordBox>
          <styles.RecommendKeywordTtitle>이런 키워드도 있어요.</styles.RecommendKeywordTtitle>
          <styles.RecommendKeywordInnerBox>
            {keywordDummyData.map((item: string, idx: React.Key | null | undefined) => (
              <React.Fragment key={idx}>
                <Keyword
                  keyword={item}
                  state={false}
                  onClick={() => AddBtnKeyword(item)}
                />
              </React.Fragment>
            ))}
          </styles.RecommendKeywordInnerBox>
        </styles.RecommendKeywordBox>
      </styles.RecommendKeywordWrapper>
    </styles.Container>
  );
};

export default KeywordRegisterPage;
