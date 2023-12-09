import styled from "styled-components";

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

export const KeywordWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0 30px;
`;

export const KeywordBox = styled.div`
  display: flex;
`;

export const KeywordBtn = styled.button`
  border: none;
  color: #fff;
  background-color: #323232;
  width: 60%;
  height: 40px;
  padding: 10px;
  border-radius: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const KeywordWarningWrapper = styled.div`
  width: 400px;
  margin: 100px auto;
  font-size: 18px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
