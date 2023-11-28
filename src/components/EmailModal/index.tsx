import { ChangeEvent, useState } from "react";

import { useSetRecoilState } from "recoil";

import google from "@/assets/google.svg";
import naver from "@/assets/naver.svg";
import { ModalState, googleBtnState, naverBtnState } from "@/recoil/atom";

import { LoginButton } from "../Button";
import Input from "../Input";

import { CloseButtonStyle, Container, InputBox, ModalWrapper } from "./style";
const EmailModal = ({ email }: { email: string }) => {
  const [googleId, setGoogleId] = useState<string>("");
  const [googlePw, setGooglePw] = useState<string>("");
  const [naverId, setNaverId] = useState<string>("");
  const [naverPw, setNaverPw] = useState<string>("");
  const setModal = useSetRecoilState(ModalState);
  const setGoogleBtn = useSetRecoilState(googleBtnState);
  const setNaverBtn = useSetRecoilState(naverBtnState);

  const EmailRegistration = (email: string) => {
    if (email === "naver") {
      setNaverBtn(true);
    } else if (email === "google") {
      setGoogleBtn(true);
    }
    setModal("");
    document.body.style.overflowY = "auto";
  };
  const CloseModal = () => {
    setModal("");
    document.body.style.overflowY = "auto";
  };
  return (
    <ModalWrapper>
      <Container $email={email}>
        <CloseButtonStyle onClick={CloseModal}>X</CloseButtonStyle>
        {email === "naver" ? (
          <>
            <img
              src={naver}
              alt="네이버"
              width={200}
            />
            <InputBox>
              <Input
                type="text"
                value={naverId}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setNaverId(e.target.value)}
                placeholder="네이버 이메일 아이디를 입력해주세요."
              />
              <Input
                type="password"
                value={naverPw}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setNaverPw(e.target.value)}
                placeholder="네이버 이메일 비밀번호를 입력해주세요."
              />
            </InputBox>
          </>
        ) : (
          <>
            <img
              src={google}
              alt="구글"
              width={200}
            />
            <InputBox>
              <Input
                type="text"
                value={googleId}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setGoogleId(e.target.value)}
                placeholder="구글 이메일 아이디를 입력해주세요."
              />
              <Input
                type="password"
                value={googlePw}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setGooglePw(e.target.value)}
                placeholder="구글 이메일 비밀번호를 입력해주세요."
              />
            </InputBox>
          </>
        )}

        <LoginButton onClick={() => EmailRegistration(email)}>이메일 등록</LoginButton>
        <p>*각 메일 서버에서 imap 설정을 승인해주세요.</p>
        <p
          className="gotoImap"
          onClick={() =>
            email === "naver"
              ? window.open("https://mail.naver.com/v2/settings/smtp/imap")
              : window.open("https://mail.google.com/mail/u/0/#settings/fwdandpop")
          }
        >
          imap 설정 바로가기
        </p>
      </Container>
    </ModalWrapper>
  );
};

export default EmailModal;
