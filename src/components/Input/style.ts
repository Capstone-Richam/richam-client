import styled from "styled-components";

import { InputProps } from "@/types/index.ts";

export const BasicInput = styled.input<InputProps>`
  box-sizing: border-box;
  width: 100%;
  /* width: 370px; */
  height: ${(props) => (props.name === "keyword" ? "40px" : "56px")};
  background-color: ${(props) =>
    props.name === "keyword" ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,1)"};

  border-radius: 5px;
  border: 1px solid var(--Gray4_300, #d9d9d9);
  outline: none;
  border: ${(props) =>
    props.placeholder === "아이디를 입력해주세요." && props.errorLine
      ? "1px solid var(--Error_50)"
      : ""};
  border: ${(props) =>
    props.placeholder === "광장에서 사용할 닉네임을 입력해주세요." && props.errorLine
      ? "1px solid var(--Error_50)"
      : ""};
  border: ${(props) =>
    props.placeholder === "인증코드 6자리 입력" && props.errorLine
      ? "1px solid var(--Error_50)"
      : ""};
  &:focus {
    border: ${(props) =>
      props.placeholder === "비밀번호를 입력해주세요."
        ? props.type === "password" && !props.errorLine
          ? "1px solid var(--Error_50)"
          : "1px solid var(--Main_Blue, #0084ff)"
        : "1px solid var(--Main_Blue, #0084ff)"};
    //border: 1px solid var(--Main_Blue, #0084ff);
  }

  //
  color: var(--Gray10_900, #212121);
  padding-left: 20px;
  font-size: var(--text_b2);
  /* padding-right: 80px; */
  font-weight: 500;

  &::placeholder {
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
    letter-spacing: -0.24px;
    color: ${(props) => (props.name === "keyword" ? "#212121" : "var(--Gray7_600, #757575);")};
  }

  &:focus {
    &::placeholder {
      opacity: 0;
    }
  }
`;
