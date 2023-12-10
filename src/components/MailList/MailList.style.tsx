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

  img {
    margin-right: 25px;
  }

  .from {
    width: 180px;
    margin-right: 40px;
  }

  .keyword {
    background-color: #e4e4e4;
    color: #464646;
    height: 30px;
    padding: 0px 12px;
    margin-right: 15px;
    border-radius: 30px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title {
    width: 70%;
    /*min-width: 500px;*/
  }

  .date {
    position: absolute;
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
  overflow: hidden; // 을 사용해 영역을 감출 것
  text-overflow: ellipsis; // 로 ... 을 만들기
  white-space: nowrap; // 아래줄로 내려가는 것을 막기위해
  word-break: break-all;
`;

export const TitleWrapper = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
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
