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
  flex-direction: row;
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
  position: relative;
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
  .send {
    position: absolute;
    top: -20px;
    left: 6px;
    font-size: 12px;
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

  .send_input {
    pointer-events: none;
  }
`;

export const Content = styled.div`
  font-size: 30px;
  color: #fff;
`;

export const AIPrompt = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .text {
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #fff;
  }
  .AI_header {
    font-size: 20px;
    font-weight: 700;
    opacity: 0.9;
  }
  .AI_description {
    font-size: 16px;
    opacity: 0.6;
    line-height: 22px;
  }
  .prompt_input {
    display: flex;
    gap: 10px;
  }
  input {
    width: 100%;
    flex: 1;
    height: 50px;
    padding: 10px;
    box-shadow: none;
    font-size: 1em;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
    background-color: transparent;
    outline: none;
    border: none;
    border-radius: 5px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    caret-color: #fff;
    color: #fff;
  }

  input:focus {
    outline: none;
    border: 1px solid rgba(255, 255, 255, 1);
  }

  .prompt_button {
    width: 50px;
    height: 50px;
    border-radius: 10%;
    background-color: rgba(255, 255, 255, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .prompt_loading {
    margin: 20px auto 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .response_content {
    margin-top: 20px;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 20px;
    border-radius: 10px;
    box-sizing: border-box;
  }

  .response_content span {
    color: rgba(255, 255, 255, 0.7);
    font-size: 18px;
    font-weight: 600;
  }

  .header {
    font-size: 20px;
    padding: 15px 0 30px;
  }
  .content {
    font-size: 16px;
    line-height: 22px;
    padding: 15px 0 30px;
  }
  .button_wrapper {
    width: 100%;
    display: flex;
    gap: 10px;
    padding-bottom: 50px;
  }
  .button_wrapper button {
    width: 100%;
    padding: 20px;
    border-radius: 10px;
    font-size: 16px;
    background-color: rgba(255, 255, 255, 0.3);
    box-shadow: none;
    border: none;
    color: #fff;
    cursor: pointer;
  }
  .button_wrapper button:hover {
    transform: translateY(-5px);
    transition: 0.3s;
  }
`;
