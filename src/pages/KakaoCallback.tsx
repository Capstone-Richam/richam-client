import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";

import { getKakao } from "@/api/login";
import { kakaoState } from "@/recoil/atom";

export const KakaoCallback = () => {
  const setKakaoState = useSetRecoilState(kakaoState);
  const CODE = new URL(window.location.href).searchParams.get("code");
  const navigate = useNavigate();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const kakaoLogin = async () => {
    if (!CODE) {
      throw new Error("No CODE");
    } else {
      try {
        await getKakao(CODE);
        // const response = await postKakaoAuth(CODE);
        navigate("/");
        setKakaoState(true);
        alert("카카오톡 연동 완료!");
      } catch {
        navigate("/");
        alert("카카오톡 연동 실패");
        new Error("shit");
      }
    }
  };

  useEffect(() => {
    kakaoLogin();
  }, [kakaoLogin]);

  return (
    <LoaderWrapper>
      <ClipLoader
        color="#fff"
        loading={true}
        size={150}
      />
    </LoaderWrapper>
  );
};

const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;
