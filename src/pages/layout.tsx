import NavBarLayout from "layouts/NavBarLayout/NavBarLayout";
import { FunctionComponent } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return <NavBarLayout>{children}</NavBarLayout>;
};

export default Layout;
