import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";

import { useRecoilState } from "recoil";

import { getKeywords, patchKeyword } from "@/api/keyword";
import plus from "@/assets/plus.svg";
import Input from "@/components/Input";
import Keyword from "@/components/Keyword";
import { keyWordArrayState } from "@/recoil/atom/keyword";

import * as styles from "./KeywordRegisterPage.style";
import { recommandKeywords } from "./constant";

const KeywordRegisterPage = () => {
  const [keywordInput, setKeywordInput] = useState<string>("");
  const [keywordArray, setKeywordArray] = useRecoilState(keyWordArrayState);

  useEffect(() => {
    getKeywords()
      .then((res) => setKeywordArray(res.data.data))
      .catch((err) => console.log(err));
  }, [setKeywordArray]);

  const handleKeywordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeywordInput(e.target.value);
  };

  const handleOnKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") addKeyword(keywordInput);
  };

  const addKeyword = (newKeyword: string) => {
    if (keywordArray.includes(newKeyword)) {
      alert("이미 등록한 키워드에요!");
      return;
    }
    patchKeyword(newKeyword)
      .then(() => {
        alert(`${newKeyword} 를 새로운 키워드로 추가했어요!`);
        setKeywordArray([...keywordArray, newKeyword]);
        setKeywordInput("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <styles.Container>
      <styles.Title>관심 키워드 관리</styles.Title>
      <styles.Description>
        관심 있는 키워드를 등록하면 관련 메일을 따로 확인하실 수 있어요!
      </styles.Description>

      <styles.Wrapper>
        <styles.InputContainer>
          <Input
            type="text"
            name="keyword"
            value={keywordInput}
            placeholder="등록할 키워드를 입력해주세요."
            onChange={handleKeywordChange}
            onKeyDown={handleOnKeyPress}
            className="keyword-input"
          />
          <styles.KeywordBtn
            onClick={() => addKeyword(keywordInput)}
            disabled={keywordInput.length <= 0}
          >
            <img src={plus} />
            추가하기
          </styles.KeywordBtn>
        </styles.InputContainer>

        <styles.ReigsterKeywordWrapper>
          <styles.ReigsterKeywordTitle>현재 등록된 키워드</styles.ReigsterKeywordTitle>
          <styles.ReigsterKeywordBox>
            <styles.ReigsterKeywordInnerBox>
              {keywordArray.length > 0 ? (
                keywordArray.map((item) => (
                  <Keyword
                    key={item}
                    keyword={item}
                    state
                  />
                ))
              ) : (
                <div style={{ color: "rgba(255,255,255,0.6)" }}>
                  등록되어 있는 키워드가 없어요..
                </div>
              )}
            </styles.ReigsterKeywordInnerBox>
          </styles.ReigsterKeywordBox>
        </styles.ReigsterKeywordWrapper>

        <styles.RecommendKeywordWrapper>
          <styles.RecommendKeywordBox>
            <styles.RecommendKeywordTitle>👍 이런 키워드도 있어요!</styles.RecommendKeywordTitle>
            <styles.RecommendKeywordInnerBox>
              {recommandKeywords.map((item: string) => (
                <Keyword
                  key={item}
                  keyword={item}
                  state={false}
                  onClick={() => addKeyword(item)}
                />
              ))}
            </styles.RecommendKeywordInnerBox>
          </styles.RecommendKeywordBox>
        </styles.RecommendKeywordWrapper>
      </styles.Wrapper>
    </styles.Container>
  );
};

export default KeywordRegisterPage;
