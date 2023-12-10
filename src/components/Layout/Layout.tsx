import { PropsWithChildren, useEffect } from "react";

import { Outlet, useNavigate } from "react-router-dom";

import ErrorBoundary from "../ErrorBoundary";

import * as styles from "./Layout.style";
import SideNavBar from "./SideNavBar";

const Layout = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) navigate("/login");
  }, [navigate]);

  return (
    <styles.Wrapper>
      <SideNavBar />
      <ErrorBoundary>{children || <Outlet />}</ErrorBoundary>
    </styles.Wrapper>
  );
};

export default Layout;
