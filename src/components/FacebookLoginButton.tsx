import { Button, styled } from "@mui/material";
import { useGoogleLogin } from "@react-oauth/google";
import FacebookIcon from "assets/icons/FacebookIcon";
import usePrivateAxios from "hooks/usePrivateAxios";

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

const FacebookLoginButton = () => {
  const axios = usePrivateAxios();
  const responseMessage = async (response: any) => {
    const credential = response.access_token;
    axios
      .post("/auth/google/login", { tokenId: credential })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const login = useGoogleLogin({
    onSuccess: responseMessage,
  });
  return (
    <StyledButton onClick={() => login()}>
      <FacebookIcon width="20" height="20" />
      Facebook
    </StyledButton>
  );
};

export default FacebookLoginButton;
