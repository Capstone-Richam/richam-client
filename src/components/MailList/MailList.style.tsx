import styled from "styled-components";

export const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MailWrapper = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 0.3px solid rgba(255, 255, 255, 0.4);
  padding: 0px 10px 0px 5px;

  display: flex;
  align-items: center;
  cursor: pointer;

  .from {
    left: 5%;
  }

  .title {
    left: 30%;
  }

  .date {
    right: 5%;
  }
`;

export const LogoWrapper = styled.div`
  width: 100%;
  height: 40px;
  border-bottom: 0.3px solid rgba(255, 255, 255, 0.4);

  display: flex;
  align-items: center;
`;

export const Text = styled.div`
  position: absolute;
  top: 25px;
`;
