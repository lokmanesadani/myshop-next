import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import UserInfo from "layouts/NavBarLayout/components/UserInfo/UserInfo";
import LoginButton from "layouts/NavBarLayout/components/LoginButton/LoginButton";

const Authenticate = () => {
  const authenticated = useSelector(
    (state: RootState) => state.auth.Authenticated
  );
  if (authenticated == undefined) return <>Loading...</>;
  if (authenticated) return <UserInfo />;

  return <LoginButton />;
};

export default Authenticate;
