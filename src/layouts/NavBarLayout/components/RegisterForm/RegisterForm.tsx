import { Box } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import {
  faAddressCard,
  faEnvelope,
  faEye,
} from "@fortawesome/free-regular-svg-icons";
import FormInput from "components/FormInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  ErrorMessage,
  FormContainer,
  LoginButton,
  LoginContainer,
  LoginSubtitle,
  LoginTitle,
  RegisterLinkContainer,
  RegisterText,
} from "layouts/NavBarLayout/components/LoginForm/styles";
import { useState } from "react";
import useAxios from "hooks/usePrivateAxios";
const passwordValidator = [
  {
    regex: /(?=.*[a-zA-Z])/,
    message: "Password must contain at least one letter",
  },
  {
    regex: /(?=.*[0-9])/,
    message: "Password must contain at least one number",
  },
  {
    // regex with all special characters
    regex: /(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])/,
    message: "Password must contain at least one special character",
  },
  {
    regex: /(?=.{8,})/,
    message: "Password must contain at least 8 characters",
  },
];
const items = [
  {
    label: "First Name",
    register: "firstName",
    type: "text",
    icon: faAddressCard,
  },

  {
    label: "Last Name",
    register: "lastName",
    type: "text",
    icon: faAddressCard,
  },
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
    validator: passwordValidator,
  },
];

const RegisterForm = ({ setRegister }: { setRegister: any }) => {
  const schema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),

    email: yup
      .string()
      .email()
      .required("Email is required")
      .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, {
        message: "Invalid email address",
      }),
    password: yup
      .string()
      .required("Password is required")
      .matches(/(?=.*[a-zA-Z])/, {
        message: " ",
      })
      .matches(/(?=.*[0-9])/, {
        message: " ",
      })
      .matches(/(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])/, {
        message: " ",
      })
      .matches(/(?=.{8,})/, {
        message: " ",
      }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const axios = useAxios();
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const onSubmit = async (data: any) => {
    try {
      const res = await axios.post("/auth/register", data);

      setErrorMessage(res.data.message);
      setSuccess(true);
    } catch (e: any) {
      setErrorMessage(e.response.data.message);
      setSuccess(false);
    }
  };
  return (
    <LoginContainer>
      <LoginTitle>Create a new account</LoginTitle>
      <LoginSubtitle
        sx={{
          marginBottom: "20px",
        }}
      >
        Welcome to the community!
      </LoginSubtitle>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            gap: "20px",
          }}
        >
          {items.slice(0, 2).map((item) => (
            <FormInput
              reg={register(item.register)}
              err={errors[item.register]}
              key={item.label}
              {...item}
            />
          ))}
        </Box>
        {items.slice(2).map((item) => (
          <FormInput
            reg={register(item.register)}
            err={errors[item.register]}
            key={item.label}
            {...item}
          />
        ))}
        <LoginButton sx={{ marginTop: "0px" }} type="submit">
          Register
        </LoginButton>
      </FormContainer>
      <RegisterLinkContainer>
        <RegisterText sx={{ color: "#777" }}>
          Already have an account?
        </RegisterText>
        <RegisterText
          onClick={() => {
            setRegister(false);
          }}
        >
          Log in
        </RegisterText>
      </RegisterLinkContainer>
      <ErrorMessage
        sx={{
          color: success ? "green" : "red",
        }}
      >
        {errorMessage && errorMessage + "!"}
      </ErrorMessage>
    </LoginContainer>
  );
};

export default RegisterForm;
