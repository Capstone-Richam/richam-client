import { ChangeEvent, useState, KeyboardEvent, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import { postLogin } from "@/api/login";
import { updateImapMailAsync } from "@/api/mail";
import { LoginButton } from "@/components/Button";
import Input from "@/components/Input";
import Logo from "@/components/Logo";
import { Toast } from "@/components/Toast";
import { ToastState } from "@/recoil/atom";

const LoginPage = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [pw, setPw] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const toast = useRecoilValue(ToastState);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) navigate("/");
  }, [navigate]);

  const handleOnKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      Login();
    }
  };

  const Login = async () => {
    const { data } = await postLogin({ id, pw });
    localStorage.setItem("accessToken", data.data.accessToken);
    localStorage.setItem("refreshToken", data.data.refreshToken);

    setLoading(true);
    const [res1, res2] = await Promise.all([
      updateImapMailAsync("NAVER"),
      updateImapMailAsync("GOOGLE"),
    ]);
    if (res1 && res2) {
      setLoading(false);
      navigate("/");
    }
  };

  const Register = () => {
    navigate("/register");
  };

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <ClipLoader
          color="#fff"
          loading={loading}
          size={170}
        />
        <p
          style={{
            fontSize: "21px",
            color: "#FFF",
            marginTop: "30px",
          }}
        >
          당신의 메일을 모두 불러오는 중이에요! 잠시만 기다려주세요..🤓
        </p>
      </div>
    );
  } else {
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
  }
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
