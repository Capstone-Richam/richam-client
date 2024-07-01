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

export const NavButton = styled.div<{ $active: boolean }>`
  width: 100%;
  padding: 8px 14px;
  height: 50px;
  border-radius: 6px;
  background-color: ${(props) => (props.$active ? "#464646" : "transparent")};
  position: relative;
  font-size: 16px;
  font-weight: 300;
  cursor: pointer;

  img {
    top: 10px;
    left: 10px;
  }

  span {
    top: 9px;
    left: 25px;
  }
`;

export const hr = styled.div`
  width: 60%;
  height: 0.5px;
  background: rgba(255, 255, 255, 0.5);
  margin: 30px 0px;
`;

export const KeywordBtn = styled.button`
  border: none;
  color: #fff;
  background-color: #282828;
  width: 90%;
  height: 40px;
  padding: 10px;
  border-radius: 50px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const PostBtn = styled.button`
  position: absolute;
  bottom: 100px;
  border: none;
  color: #fff;
  background-color: #282828;
  width: 90%;
  height: 40px;
  padding: 10px;
  border-radius: 10px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const logoutBtn = styled.button`
  position: absolute;
  bottom: 30px;
  border: none;
  color: #fff;
  background-color: #121212;
  width: 90%;
  height: 40px;
  padding: 10px;
  cursor: pointer;
`;
