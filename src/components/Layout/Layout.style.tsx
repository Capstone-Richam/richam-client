import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  background: #202020;
  color: #fff;

  padding-left: 15%;
`;

export const BarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 15%;
  min-width: 170px;
  height: 100%;
  min-height: 100vh;

  background-color: #121212;
  color: #fff;
  border-right: 0.5px solid rgba(255, 255, 255, 0.6);

  padding: 33px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .keyword-btn {
    width: 100%;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: 50px;
  width: 100%;
`;

export const NavButton = styled.div<{ active: boolean }>`
  width: 100%;
  padding: 8px 14px;
  height: 50px;
  border-radius: 6px;
  background-color: ${(props) => (props.active ? "#464646" : "transparent")};

  display: flex;
  align-items: center;

  // TODO 폰트 크기 안맞음 -> Pretendard 문제인지 확인
  font-size: 16px;
  font-weight: 300;
  cursor: pointer;
`;

export const hr = styled.div`
  width: 60%;
  height: 0.5px;
  background: rgba(255, 255, 255, 0.5);
  margin: 30px 0px;
`;
