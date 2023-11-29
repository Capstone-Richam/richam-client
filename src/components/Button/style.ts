import styled from "styled-components";

import { ButtonProps } from "@/types/index.ts";

export const LoginBtn = styled.button<ButtonProps>`
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 360px;
  height: 56px;
  border-radius: 5px;
  border: none;

  //
  background-color: ${(props) => (props.children === "회원가입" ? "#79848D" : "#3b4146")};
  color: #fff;
  text-align: center;
  font-size: var(--text_b1);
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 100% */
  margin-top: ${(props) =>
    props.children === "회원가입" ? "0px" : props.children === "이메일 등록" ? "20px" : "40px"};
`;
