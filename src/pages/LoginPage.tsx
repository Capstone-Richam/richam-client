import { ChangeEvent, useState, KeyboardEvent, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import { postLogin } from "@/api/login";
import { LoginButton } from "@/components/Button";
import Input from "@/components/Input";
import Logo from "@/components/Logo";
import { Toast } from "@/components/Toast";
import { ToastState } from "@/recoil/atom";

const LoginPage = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [pw, setPw] = useState<string>("");
  const [toast, setToast] = useRecoilState(ToastState);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) navigate("/");
  }, [navigate]);

  const handleOnKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      Login();
    }
  };

  const Login = () => {
    postLogin({ id, pw })
      .then((res) => {
        console.log(res);
        localStorage.setItem("accessToken", res.data.data.accessToken);
        localStorage.setItem("refreshToken", res.data.data.refreshToken);
        navigate("/");
      })
      .catch(() => {
        setToast(true);
        setTimeout(() => {
          setToast(false);
        }, 1500);
      });
    //로그인 api
  };

  const Register = () => {
    navigate("/register");
  };

  return (
    <Container>
      {toast && <Toast message="아이디 또는 비밀번호를 다시 입력해주세요." />}
      <Logo />
      <InputBox>
        <Input
          type="text"
          value={id}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setId(e.target.value)}
          placeholder="아이디"
        />
        <Input
          type="password"
          value={pw}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPw(e.target.value)}
          placeholder="비밀번호 (영문, 숫자, 특수문자 포함 8~30자)"
          onKeyDown={handleOnKeyPress}
        />
      </InputBox>
      <LoginButton onClick={Login}>로그인</LoginButton>
      <OrLine>
        <div></div>
        <p>또는</p>
        <div></div>
      </OrLine>
      <LoginButton onClick={Register}>회원가입</LoginButton>
      <EtcBox>
        <div className="findProp">
          <p className="notActive">아이디 찾기</p>
          <p>|</p>
          <p className="notActive">비밀번호 찾기</p>
        </div>
      </EtcBox>
    </Container>
  );
};

export default LoginPage;

const Container = styled.div`
  width: 360px;
  margin: 0 auto;
`;

const InputBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
`;

const OrLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 14px 0;
  div {
    width: 163px;
    height: 1px;
    background: #d9d9d9;
  }

  p {
    margin: 0 5px;
    color: var(--Gray5_400, #bdbdbd);
    text-align: center;
    font-size: 12px;
    font-style: normal;
    line-height: 18px; /* 150% */
    letter-spacing: -0.18px;
  }
`;

const EtcBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 24px;
  .findProp {
    display: flex;
    gap: 10px;
    color: #bdbdbd;
    text-align: center;
  }
  .notActive {
    cursor: pointer;
  }
`;
