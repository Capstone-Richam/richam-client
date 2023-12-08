import { PropsWithChildren, useEffect } from "react";

import { Outlet, useNavigate } from "react-router-dom";

import * as styles from "./Layout.style";
import SideNavBar from "./SideNavBar";

const Layout = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/login");
    } else {
      navigate("/");
    }
  }, [navigate]);

  return (
    <styles.Wrapper>
      <SideNavBar />
      {children || <Outlet />}
    </styles.Wrapper>
  );
};

export default Layout;
