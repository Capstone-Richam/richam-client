import styled from "styled-components";

export const Container = styled.div<{ $state: boolean }>`
  width: fit-content;
  height: fit-content;
  color: #212121;
  background-color: #fff;
  border-radius: 30px;
  padding: 10px 20px;
  margin: 10px 8px;
  text-align: center;
  img {
    margin-left: ${(props) => props.$state && "5px"};
    cursor: pointer;
  }
`;
