import styled from "styled-components";

export const ErrorContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 20px;
  font-weight: 600;
`;

export const RefreshButton = styled.button`
  border: none;
  color: #fff;
  background-color: #282828;
  width: 200px;
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
