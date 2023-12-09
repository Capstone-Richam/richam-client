import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 60px 60px 0px;
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 12px;
`;

export const Description = styled.div`
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 80px;
`;

/** 제목, 설명 제외한 모든 컨텐츠 Wrapper */
export const Wrapper = styled.div`
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 35px;
  margin: 50px 0px 70px;
  position: relative;

  .keyword-input {
    width: 100%;
    background-color: transparent;
    color: #fff;
    border-radius: 0px;
    border: none;
    border-bottom: 2px solid #fff;
    padding-left: 10px;
    padding-bottom: 10px;

    &::placeholder {
      color: #fff;
    }
  }
`;

export const KeywordBtn = styled.button<{ disabled: boolean }>`
  border: none;
  border-radius: 50px;
  opacity: ${(props) => (props.disabled ? ".5" : "1")};
  color: #fff;
  background-color: #464646;
  width: 100px;
  padding: 10px;

  position: absolute;
  bottom: 5px;
  right: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

export const ReigsterKeywordWrapper = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 70px;
`;

export const ReigsterKeywordTitle = styled.div`
  height: 30px;
  background-color: #212121;
  position: absolute;
  top: -6px;
  left: 20px;
  z-index: 1;
  padding: 0 10px;
  text-align: center;
`;

export const ReigsterKeywordBox = styled.div`
  width: 100%;
  display: flex;
  border: 2px solid #fff;
`;

export const ReigsterKeywordInnerBox = styled.div`
  width: 100%;
  margin: 25px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const RecommendKeywordWrapper = styled.div`
  width: 100%;
`;

export const RecommendKeywordBox = styled.div`
  width: 100%;
`;

export const RecommendKeywordTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
`;

export const RecommendKeywordInnerBox = styled.div`
  display: flex;
  margin-top: 15px;
  flex-wrap: wrap;
`;
