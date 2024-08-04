import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { getKakao } from "@/api/login";

export const KakaoCallback = () => {
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

  return <></>;
};
