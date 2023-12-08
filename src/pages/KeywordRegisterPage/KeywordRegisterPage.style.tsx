import styled from "styled-components";

export const Container = styled.div`
  width: 85%;
  padding: 60px 80px 0px;
  color: #fff;
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const Description = styled.div`
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 30px;
`;

export const inputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  height: 35px;
  margin-bottom: 70px;
`;
export const Keywordinput = styled.div`
  width: 75%;
`;

export const KeywordBtn = styled.button<{ disabled: boolean }>`
  border: none;
  opacity: ${(props) => (props.disabled ? ".5" : "1")};

  color: #fff;
  background-color: #464646;
  width: 180px;
  padding: 20px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const ReigsterKeywordWrapper = styled.div`
  width: 90%;
  position: relative;
`;
export const ReigsterKeywordTitle = styled.div`
  width: 100px;
  height: 30px;
  background-color: #212121;
  position: absolute;
  top: -6px;
  left: 180px;
  z-index: 1;
  padding: 0 5px;
  text-align: center;
`;

export const ReigsterKeywordBox = styled.div`
  width: 70%;
  height: 150px;
  display: flex;
  border: 2px solid #fff;
  margin: 0 auto;
`;

export const ReigsterKeywordInnerBox = styled.div`
  width: 100%;
  margin: 25px;
  display: flex;
  flex-direction: row;
`;

export const RecommendKeywordWrapper = styled.div`
  margin-top: 30px;
  width: 90%;
`;

export const RecommendKeywordBox = styled.div`
  width: 70%;
  margin: 45px auto 0px;
`;

export const RecommendKeywordTtitle = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const RecommendKeywordInnerBox = styled.div`
  display: flex;
  margin-top: 15px;
  flex-wrap: wrap;
`;
