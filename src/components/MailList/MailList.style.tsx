import styled from "styled-components";

export const ListWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
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
    overflow: hidden; // 을 사용해 영역을 감출 것
    text-overflow: ellipsis; // 로 ... 을 만들기
    white-space: nowrap; // 아래줄로 내려가는 것을 막기위해
    word-break: break-all;
    width: 17%;
  }

  .title {
    left: 30%;
    overflow: hidden; // 을 사용해 영역을 감출 것
    text-overflow: ellipsis; // 로 ... 을 만들기
    white-space: nowrap; // 아래줄로 내려가는 것을 막기위해
    word-break: break-all;
    width: 40%;
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

export const Box = styled.div`
  width: 100%;
  height: 30px;
`;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

export const EmptyContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;
  margin-top: 100px;
`;
