import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "redux/slices/authSlice";
import { AppDispatch } from "redux/store";
const checkAuth = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + "/auth/isLoggedIn",
      {
        withCredentials: true,
      }
    );
    const { user, accessToken, authenticated } = response.data;

    if (authenticated)
      dispatch(
        login({
          user,
          token: accessToken,
        })
      );
    else dispatch(logout());
  } catch (error) {
    dispatch(logout());
  }
};
const AuthProvider = (props: any) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return <>{props.children}</>;
};

export default AuthProvider;
