import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

export const Editor = styled.div`
  min-width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

export const Title = styled.div`
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
