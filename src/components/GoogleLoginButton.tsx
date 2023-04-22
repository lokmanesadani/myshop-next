import { Button, styled } from "@mui/material";
import { useGoogleLogin } from "@react-oauth/google";
import GoogleIcon from "assets/icons/GoogleIcon";
import useAxios from "hooks/usePrivateAxios";
import { useDispatch } from "react-redux";
import { login } from "redux/slices/authSlice";
const StyledButton = styled(Button)(() => ({
  width: "100%",
  backgroundColor: "#fff",
  color: "#00000099",
  border: "1px solid #00000022",
  borderRadius: "5px",
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "5px",
  height: "50px",
  fontFamily: "Poppins",
}));

const GoogleLoginButton = () => {
  const dispatch = useDispatch();
  const axios = useAxios();
  const responseMessage = async (response: any) => {
    const credential = response.access_token;
    try {
      const { data } = await axios.post("/auth/google/login", {
        tokenId: credential,
      });
      dispatch(
        login({
          user: data.user,
          token: data.accessToken,
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const loginUser = useGoogleLogin({
    onSuccess: responseMessage,
  });
  return (
    <StyledButton onClick={() => loginUser()}>
      <GoogleIcon width="20" height="20" />
      Google
    </StyledButton>
  );
};

export default GoogleLoginButton;
