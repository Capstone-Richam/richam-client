import styled from "styled-components";

export const LoaderWrapper = styled.div`
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

export const Container = styled.div`
  width: 100%;
  padding: 60px 60px 0px;
`;

export const Title = styled.div`
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 12px;
`;

export const Description = styled.div`
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 40px;
`;

export const innerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Editor = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 30px;
  .tox .tox-edit-area::before {
    border: 2px solid #0a0c0e !important;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 50%;
  padding: 20px;
  box-sizing: border-box;
`;

export const HeaderRight = styled.div`
  width: fit-content;
  display: flex;
  gap: 60px;
  align-items: center;
`;

export const togglesButton = styled.div`
  width: fit-content;
  display: flex;
  gap: 10px;
  transform: scale(1.2);
  img {
    cursor: pointer;
    opacity: 0.2;
    transition: 0.4s;
  }
  img.active {
    opacity: 1;
  }
`;

export const PostButton = styled.div`
  border: none;
  color: #fff;
  background-color: #575555;
  width: 120px;
  height: 50px;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const HeaderTitle = styled.div`
  color: #fff;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  input {
    width: 80%;
    box-shadow: none;
    font-size: 1em;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
    background-color: transparent;
    outline: none;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    caret-color: #fff;
    color: #fff;
  }

  input:focus {
    outline: none;
    border-bottom: 1px solid rgba(255, 255, 255, 1);
  }
`;

export const Content = styled.div`
  font-size: 30px;
  color: #fff;
`;
