import { styled } from "styled-components";

export const Toast = ({ message }: { message: string }) => {
  return (
    <ToastWrapper>
      <ToastBox>
        <div>{message}</div>
      </ToastBox>
    </ToastWrapper>
  );
};

const ToastWrapper = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  text-align: center;

  color: #272727;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 20;
`;

const ToastBox = styled.div`
  height: 95px;
  width: 350px;
  background: #ffffff;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  animation: slideUp 1s;

  .sqaure {
    width: 24px;
    height: 24px;

    background: #272727;
    border: 1px solid #272727;
    border-radius: 4px;
    margin-bottom: 16px;
    @keyframes slideUp {
      0% {
        transform: translateY(30px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
`;
