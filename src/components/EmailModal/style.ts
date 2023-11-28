import styled from "styled-components";

export const ModalWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 500;
`;

export const CloseButtonStyle = styled.div`
  position: absolute;
  top: 0;
  left: -55px;
  width: 55px;
  height: 55px;
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 30px;
  padding-top: 6px;
`;
export const Container = styled.div<{ $email: string }>`
  position: relative;
  width: 456px;
  height: 442px;
  flex-shrink: 0;
  border-radius: 5px;
  background: var(--White, #fff);
  box-shadow: 0px 15px 55px 0px rgba(66, 66, 66, 0.35);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin-top: ${(props) => (props.$email === "naver" ? "50px" : "30px")};
  }
  p {
    margin: 15px 0 5px;
    color: var(--Gray7_600, #757575);
    text-align: center;
    font-size: 1rem;
  }
  .gotoImap {
    font-size: 0.8rem;
    cursor: pointer;
    color: #424242;
    border-bottom: 1px solid #424242;
  }
`;

export const InputBox = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
`;
