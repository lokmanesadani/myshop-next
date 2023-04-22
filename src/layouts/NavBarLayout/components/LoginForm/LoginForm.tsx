import { faEnvelope, faEye } from "@fortawesome/free-regular-svg-icons";
import { Box, Typography, Divider, Checkbox, Button } from "@mui/material";
import FacebookLoginButton from "components/FacebookLoginButton";
import FormInput from "components/FormInput";
import GoogleLoginButton from "components/GoogleLoginButton";
import {
  DividerText,
  ErrorMessage,
  ForgotPassword,
  FormContainer,
  LoginButton,
  LoginContainer,
  LoginSubtitle,
  LoginTitle,
  RegisterLinkContainer,
  RegisterText,
  RememberCheckbox,
  RememberMeContainer,
  RememberText,
  SocialLoginContainer,
  StyledDivider,
} from "layouts/NavBarLayout/components/LoginForm/styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useAxios from "hooks/usePrivateAxios";
import { useDispatch, useSelector } from "react-redux";
import { login } from "redux/slices/authSlice";
import { RootState } from "redux/store";
import React from "react";
const items = [
  {
    label: "Email",
    register: "email",
    type: "text",
    icon: faEnvelope,
  },
  {
    label: "Password",
    register: "password",
    type: "password",
    icon: faEye,
  },
];

const LoginForm = ({ setRegister }: { setRegister: any }) => {
  const dispatch = useDispatch();
  const axios = useAxios();
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Please enter your email address or phone number"),
    password: yup.string().required("Please enter your password"),
  });
  const user = useSelector((state: RootState) => state.auth.user);
  const [errorMessage, setErrorMessage] = React.useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: any) => {
    try {
      const res = await axios.post("/auth/login", data, {
        withCredentials: true,
      });
      dispatch(
        login({
          user: res.data.user,
          token: res.data.accessToken,
        })
      );
    } catch (err: any) {
      setErrorMessage(err?.response?.data?.message);
    }
  };

  return (
    <LoginContainer>
      <LoginTitle>Log in to your account</LoginTitle>
      <LoginSubtitle>Welcome back! Select your method to sign in</LoginSubtitle>
      <SocialLoginContainer>
        <GoogleLoginButton />
        <FacebookLoginButton />
      </SocialLoginContainer>
      <StyledDivider>
        <Divider sx={{ flex: 1 }} />
        <DividerText>or continue with email</DividerText>
        <Divider sx={{ flex: 1 }} />
      </StyledDivider>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        {items.map((item) => (
          <FormInput
            reg={register(item.register)}
            err={errors[item.register]}
            key={item.label}
            {...item}
          />
        ))}
        <RememberMeContainer>
          <RememberCheckbox value={true} />
          <RememberText>Remember me</RememberText>
          <ForgotPassword>Forgot Password?</ForgotPassword>
        </RememberMeContainer>
        <LoginButton type="submit">Log in</LoginButton>
      </FormContainer>

      <RegisterLinkContainer>
        <RegisterText sx={{ color: "#777" }}>
          Don't have an account?
        </RegisterText>
        <RegisterText
          onClick={() => {
            setRegister(true);
          }}
        >
          Register
        </RegisterText>
      </RegisterLinkContainer>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </LoginContainer>
  );
};

export default LoginForm;
