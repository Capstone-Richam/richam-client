import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 60px 60px 0px;
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 12px;
`;

export const Description = styled.div`
  font-size: 15px;
  font-weight: 300;
  margin-bottom: 30px;
`;

export const Content = styled.div`
  font-size: 15px;
  font-weight: 300;
  margin-bottom: 20px;
  background-color: #fff;
  color: #323232;
  width: 100%;
  overflow: hidden;

  * {
    max-width: 100%;
  }
`;
