import { ChangeEvent, KeyboardEvent, useState } from "react";

import { useRecoilState, useSetRecoilState } from "recoil";

import { postValidationEmail } from "@/api/login";
import google from "@/assets/google.svg";
import naver from "@/assets/naver.svg";
import { ModalState, ToastState, googleBtnState, naverBtnState } from "@/recoil/atom";

import { LoginButton } from "../Button";
import Input from "../Input";
import { Toast } from "../Toast";

import { CloseButtonStyle, Container, InputBox, ModalWrapper } from "./style";
const EmailModal = ({
  email,
  Id,
  setId,
  Pw,
  setPw,
}: {
  email: string;
  Id: string;
  Pw: string;
  setId: (id: string) => void;
  setPw: (id: string) => void;
}) => {
  const setModal = useSetRecoilState(ModalState);
  const setGoogleBtn = useSetRecoilState(googleBtnState);
  const setNaverBtn = useSetRecoilState(naverBtnState);
  const [toast, setToast] = useRecoilState(ToastState);
  const [text, setText] = useState<string>("");
  const handleOnKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      EmailRegistration(email);
    }
  };

  const EmailRegistration = (email: string) => {
    postValidationEmail({ Id, Pw })
      .then((res) => {
        console.log(res);
        if (email === "naver") {
          setNaverBtn(true);
        } else if (email === "google") {
          setGoogleBtn(true);
        }
        setModal("");
        document.body.style.overflowY = "auto";
      })
      .catch((err) => {
        if (err.response.data.code === 409) {
          setText("IMAP 설정을 진행해주세요.");
        } else if (err.response.data.code === 410) {
          setText("아이디와 패스워드를 다시 입력해주세요.");
        } else {
          setText(`서버에러 입니다. 에러코드 : ${err.response.data.code}`);
        }

        setToast(true);
        setTimeout(() => {
          setToast(false);
        }, 1500);

        // 이메일 번호 틀렸을 때도 에러처리하기
      });

    //성공했을 때 이 로직 써야함!

    // setModal("");
    // document.body.style.overflowY = "auto";
  };
  const CloseModal = () => {
    setModal("");
    document.body.style.overflowY = "auto";
  };
  return (
    <ModalWrapper>
      <Container $email={email}>
        {toast && <Toast message={text} />}
        <CloseButtonStyle onClick={CloseModal}>X</CloseButtonStyle>

        <img
          src={email === "naver" ? naver : google}
          alt="네이버"
          width={200}
        />
        <InputBox>
          <Input
            type="text"
            value={Id}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setId(e.target.value)}
            placeholder={
              email === "naver"
                ? "네이버 이메일 아이디를 입력해주세요."
                : "구글 이메일 아이디를 입력해주세요."
            }
          />
          <Input
            type="password"
            value={Pw}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPw(e.target.value)}
            placeholder={
              email === "naver"
                ? "네이버 이메일 비밀번호를 입력해주세요."
                : "구글 이메일 비밀번호를 입력해주세요."
            }
            onKeyDown={handleOnKeyPress}
          />
        </InputBox>
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
