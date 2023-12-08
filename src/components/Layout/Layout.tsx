import { PropsWithChildren } from "react";

import { Outlet } from "react-router-dom";

import * as styles from "./Layout.style";
import SideNavBar from "./SideNavBar";

const Layout = ({ children }: PropsWithChildren) => (
  <styles.Wrapper>
    <SideNavBar />
    {children || <Outlet />}
  </styles.Wrapper>
);

export default Layout;
