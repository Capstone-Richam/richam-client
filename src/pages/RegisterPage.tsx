import { ChangeEvent, useState, FocusEvent, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";

import { getDuplicate, postRegister } from "@/api/login";
import EmailModal from "@/components/EmailModal";
import Input from "@/components/Input";
import Logo from "@/components/Logo";
import { ModalState, googleBtnState, naverBtnState } from "@/recoil/atom";

/** @author hoyyChoi */
const RegisterPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("accessToken")) navigate("/");
  }, [navigate]);

  // 이 수많은 useState 실화입니까...
  const [userId, setUserId] = useState<string>("");
  const [password1, setPassword1] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [googleId, setGoogleId] = useState<string>("");
  const [googlePw, setGooglePw] = useState<string>("");
  const [naverId, setNaverId] = useState<string>("");
  const [naverPw, setNaverPw] = useState<string>("");
  const [registerFlag, setRegisterFlag] = useState<boolean>(true);

  const [userIdNum, setUserIdNum] = useState<number>(0);
  const [duplicateShow, setDuplicateShow] = useState<boolean>(false);
  const [duplicate, setDuplicate] = useState<boolean>(false);
  const [password1Num, setPassword1Num] = useState<number>(0);
  const [password2Num, setPassword2Num] = useState<number>(0);
  const [password1Error, setPassword1Error] = useState<boolean>(false);
  const [password2Error, setPassword2Error] = useState<boolean>(false);
  const [password2Show, setPassword2Show] = useState<boolean>(false);
  const [errorIdLine, setErrorIdLine] = useState<boolean>(false);
  const [focus, setFocus] = useState<boolean>(false);
  const [duplicateShowNickname, setDuplicateShowNickname] = useState<boolean>(false);
  const [duplicateNickname, setDuplicateNickname] = useState<boolean>(false);
  const [errorNicknameLine, setErrorNicknameLine] = useState<boolean>(false);

  const [modal, setModal] = useRecoilState(ModalState);
  const googleBtn = useRecoilValue(googleBtnState);
  const naverBtn = useRecoilValue(naverBtnState);

  const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDuplicateShow(false);
    setErrorIdLine(false);
    if (value.length < 16) {
      setUserIdNum(value.length);
      setUserId(value);
    }
  };
  //비밀번호 1번째 입력
  const handlePassword1Change = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const regex = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
    if (value.length < 31) {
      setPassword1Num(value.length);
    }

    setPassword1(value);

    if (!regex.test(value)) {
      setPassword1Error(false);
    } else {
      setPassword1Error(true);
    }
  };

  // 비밀번호 2차 입력
  const handlePassword2Change = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword2Show(true);
    const value = e.target.value;
    if (value.length < 31) {
      setPassword2Num(value.length);
    }
    setPassword2(value);
    if (password1 !== value) {
      setPassword2Error(false);
    } else {
      setPassword2Error(true);
    }
  };
  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    console.log(e);
    setFocus(true);
  };

  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDuplicateShowNickname(false); // 일단 버튼을 누르면 hide 클래스 제거
    setErrorNicknameLine(false);
    if (value.length < 11) {
      setName(value);
    }
  };

  const DuplicateCheck = () => {
    setDuplicate(false);
    setDuplicateShow(true); // 일단 버튼을 누르면 hide 클래스 제거
    setErrorIdLine(true);

    getDuplicate({ aorn: "account", content: userId })
      .then((res) => {
        console.log(res);
        setDuplicate(true);
        setDuplicateShow(true); // 일단 버튼을 누르면 hide 클래스 제거
        // if (!res.data.data.isChecked) {
        //   setDuplicate(true);
        //   setDuplicateShow(true); // 일단 버튼을 누르면 hide 클래스 제거
        // }
        // else {
        //   setDuplicate(false);
        //   setDuplicateShow(true); // 일단 버튼을 누르면 hide 클래스 제거
        //   setErrorIdLine(true); //에러 라인 전달
        // }
      })
      .catch(() => {
        setDuplicate(false);
        setDuplicateShow(true); // 일단 버튼을 누르면 hide 클래스 제거
        setErrorIdLine(true); //에러 라인 전달
      });
    // 로딩 후.
    // api 요청해야함. 요청이 오면
    // if 성공이 오면 듀플리케이트 값 true로 하고 show true
  };

  const DuplicateCheckNickname = () => {
    getDuplicate({ aorn: "nickname", content: name })
      .then((res) => {
        console.log(res);
        setDuplicateNickname(true);
        setDuplicateShowNickname(true); // 일단 버튼을 누르면 hide 클래스 제거
      })
      .catch(() => {
        setDuplicateNickname(false);
        setDuplicateShowNickname(true); // 일단 버튼을 누르면 hide 클래스 제거
        setErrorNicknameLine(true); //에러 라인 전달
      });

    // 로딩 후.
    // api 요청해야함. 요청이 오면
    // if 성공이 오면 듀플리케이트 값 true로 하고 show true
  };

  const OpenModal = (email: string) => {
    setModal(email);
    document.body.style.overflowY = "hidden";
  };

  const OkRegister = () => {
    postRegister({ userId, password2, name, naverId, naverPw, googleId, googlePw })
      .then((res) => {
        console.log(res); // 여기서 로컬스토리지 저장
        navigate("/login");
      }) // 로그인으로 라우팅
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (
      //duplicate &&
      userId &&
      password1Error &&
      password1 &&
      password2Error &&
      password2 &&
      name &&
      googleBtn &&
      naverBtn
    ) {
      setRegisterFlag(false);
    } else {
      setRegisterFlag(true);
    }
  }, [
    duplicate,
    googleBtn,
    name,
    naverBtn,
    password1,
    password1Error,
    password2,
    password2Error,
    userId,
  ]);

  return (
    <>
      {modal === "naver" ? (
        <EmailModal
          email="naver"
          Id={naverId}
          setId={setNaverId}
          Pw={naverPw}
          setPw={setNaverPw}
        />
      ) : modal === "google" ? (
        <EmailModal
          email="google"
          Id={googleId}
          setId={setGoogleId}
          Pw={googlePw}
          setPw={setGooglePw}
        />
      ) : (
        ""
      )}
      <Container>
        <Logo />
        <RegisterBox>
          <IdBox>
            <p className="title">아이디</p>
            <div className="inputId">
              <Input
                type="text"
                value={userId}
                onChange={handleIdChange}
                placeholder="아이디를 입력해주세요."
                errorLine={errorIdLine}
              />
              <DuplicateBtn
                className={duplicateShow ? "title" : ""}
                onClick={DuplicateCheck}
              >
                중복확인
              </DuplicateBtn>
            </div>
            <div className="parityCheck">
              <div>
                {duplicateShow ? (
                  duplicate ? (
                    <p className="success">사용 가능한 아이디예요.</p>
                  ) : (
                    <p className="error">사용할 수 없는 아이디예요.</p>
                  )
                ) : (
                  ""
                )}
              </div>
              <div>({userIdNum}/15)</div>
            </div>
          </IdBox>
          <PasswordBox>
            <p className="title">비밀번호</p>
            <p
              className={!focus ? "caption" : password1Error ? "caption success" : "caption error"}
            >
              영문, 숫자, 특수문자를 포함한 8~30자 사이의 비밀번호를 입력해주세요.
            </p>
            <div className="inputPassword">
              <Input
                type="password"
                value={password1}
                onChange={handlePassword1Change}
                placeholder="비밀번호를 입력해주세요."
                onFocus={handleFocus}
                errorLine={password1Error}
              />
            </div>
            <div className="parityCheck">
              <div></div>
              <div>({password1Num}/30)</div>
            </div>
          </PasswordBox>

          <PasswordCheckBox>
            <p className="title">비밀번호 확인</p>
            <div className="inputPassword">
              <Input
                type="password"
                value={password2}
                onChange={handlePassword2Change}
                placeholder="비밀번호를 입력해주세요."
                errorLine={password2Error}
              />
            </div>
            <div className="parityCheck">
              <div>
                {password2Show ? (
                  password2Error ? (
                    <p className="success">비밀번호가 일치해요.</p>
                  ) : (
                    <p className="error">비밀번호가 일치하지 않아요.</p>
                  )
                ) : (
                  ""
                )}
              </div>
              <div>({password2Num}/30)</div>
            </div>
          </PasswordCheckBox>
          <NicknameBox>
            <p className="title">이름</p>
            <div className="inputNickname">
              <Input
                type="text"
                value={name}
                onChange={handleNicknameChange}
                placeholder="본인 이름을 입력해주세요."
                errorLine={errorNicknameLine}
              />
              <DuplicateBtn
                //disabled={duplicateNickname} // 성공하면 바꿀 수 없게
                className={duplicateShowNickname ? "title" : ""}
                onClick={DuplicateCheckNickname}
              >
                중복확인
              </DuplicateBtn>
            </div>
            <div className="parityCheck">
              <div>
                {duplicateShowNickname ? (
                  duplicateNickname ? (
                    <p className="success">사용 가능한 닉네임이에요.</p>
                  ) : (
                    <p className="error">사용할 수 없는 닉네임이에요.</p>
                  )
                ) : (
                  ""
                )}
              </div>
            </div>
          </NicknameBox>
          <EmailBox>
            <p className="title">소셜 이메일 등록</p>
            <div className="Btns">
              <GoogleEmailCheckBtn
                disabled={googleBtn}
                googleBtn={googleBtn}
                onClick={() => OpenModal("google")}
              >
                구글
              </GoogleEmailCheckBtn>
              <NaverEmailCheckBtn
                disabled={naverBtn}
                naverBtn={naverBtn}
                onClick={() => OpenModal("naver")}
              >
                네이버
              </NaverEmailCheckBtn>
            </div>
          </EmailBox>
          <RegisterButton
            disabled={registerFlag}
            onClick={OkRegister}
          >
            회원가입 완료
          </RegisterButton>
        </RegisterBox>
      </Container>
    </>
  );
};

export default RegisterPage;

const Container = styled.div`
  width: 360px;
  margin: 0 auto;
`;

export const RegisterBox = styled.div`
  padding-bottom: 100px;
  margin-top: 30px;
  gap: var(--text_b3);
  color: var(--Gray7_600, #757575);
  .codeContainer {
    width: 100%;
    background-color: var(--Gray2_100);
    margin-top: 20px;
    display: block;
    transition: 3s;
  }
  .none {
    display: none;
  }
  .title {
    color: #f0e4e4;
  }
  p {
    font-size: var(--text_b3);
  }
  .caption {
    font-size: 11px;
    color: #aea7a7;
  }
  .error {
    color: var(--Error_50, #dc362e);
  }
  .success {
    color: var(--Main_Blue, #0084ff);
  }

  .parityCheck {
    display: flex;
    justify-content: space-between;
    font-size: var(--text_cap1);
    p {
      font-size: var(--text_cap1);
    }
  }
`;

export const IdBox = styled.div`
  .inputId {
    position: relative;
    margin: 6px 0 4px;
  }
  margin-bottom: 8px;
`;

export const DuplicateBtn = styled.button`
  border: 0;
  background-color: transparent;
  font-family: "Pretendard";
  font-size: var(--text_b2);
  padding: 0;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  right: 20px;
  color: #0084ff;
  cursor: pointer;
`;

export const PasswordBox = styled.div`
  position: relative;
  margin-top: 20px;
  .title {
    margin-bottom: 4px;
  }
  .inputPassword {
    margin: 7px 0 2px;
  }
  margin-bottom: 10px;
`;
export const PasswordCheckBox = styled.div`
  position: relative;
  .inputPassword {
    margin: 6px 0;
  }
  margin-bottom: 10px;
`;

export const NicknameBox = styled.div`
  .inputNickname {
    position: relative;
    margin: 6px 0;
  }
  margin-bottom: 12px;
`;

export const EmailBox = styled.div`
  margin-top: 30px;
  .title {
    margin-bottom: 6px;
  }
  .Btns {
    display: flex;
    gap: 6px;
    margin-bottom: 60px;
  }
`;

export const GoogleEmailCheckBtn = styled.button<{ googleBtn: boolean }>`
  color: ${(props) => (props.googleBtn ? "var(--Main_Blue, #0084FF)" : "var(--Gray6_500)")};
  background-color: ${(props) =>
    props.googleBtn ? "var(--blue, #eaf5ff)" : "var(--Gray1_50, #fafafa)"};
  border: ${(props) =>
    props.googleBtn
      ? "1px solid var(--Main_Blue, #0084ff)"
      : "1px solid var(--Gray4_300, #d9d9d9)"};
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 5px;
  width: 182px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const NaverEmailCheckBtn = styled.button<{ naverBtn: boolean }>`
  color: ${(props) => (props.naverBtn ? "var(--Main_Blue, #0084FF)" : "var(--Gray6_500)")};
  background-color: ${(props) =>
    props.naverBtn ? "var(--blue, #eaf5ff)" : "var(--Gray1_50, #fafafa)"};
  border: ${(props) =>
    props.naverBtn ? "1px solid var(--Main_Blue, #0084ff)" : "1px solid var(--Gray4_300, #d9d9d9)"};
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 5px;
  width: 182px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RegisterButton = styled.button`
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
  background-color: ${(props) => (props.disabled ? "#79848D" : "#3b4146")};
  color: ${(props) => (props.disabled ? "#979da1" : "#fff")};
  text-align: center;
  font-size: var(--text_b1);
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 100% */
  margin-top: ${(props) =>
    props.children === "회원가입" ? "0px" : props.children === "이메일 등록" ? "20px" : "40px"};
`;
