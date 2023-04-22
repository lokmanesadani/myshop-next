import UserDetails from "layouts/NavBarLayout/components/UserDetails/UserDetails";
import UserNotifications from "layouts/NavBarLayout/components/UserNotifications/UserNotifications";
import UserMessages from "layouts/NavBarLayout/components/UserMessages/UserMessages";
import UserCart from "layouts/NavBarLayout/components/UserCart/UserCart";

const UserInfo = () => {
  return (
    <>
      <UserCart />
      <UserMessages />
      <UserNotifications />
      <UserDetails />
    </>
  );
};

export default UserInfo;
