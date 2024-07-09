import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import logo from "@/assets/emap_logo.svg";
const Logo = () => {
  const urlSplit = document.location.href.split("/")[3];
  const navigate = useNavigate();
  return (
    <Container $url={urlSplit}>
      <img
        src={logo}
        alt="emap"
        height={53}
        onClick={() => navigate("/")}
      />
    </Container>
  );
};

export default Logo;

const Container = styled.div<{ $url: string }>`
  display: flex;
  justify-content: center;
  img {
    cursor: pointer;
    margin-top: ${(props) => (props.$url === "register" ? "50px" : "130px")};
    width: 370px;
    margin-bottom: 20px;
  }
`;
