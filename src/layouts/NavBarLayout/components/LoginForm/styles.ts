import { styled, Box, Typography, Checkbox, Button } from "@mui/material";

export const LoginContainer = styled(Box)(() => ({
  minWidth: "200px",
  maxWidth: "360px",
  width: "360px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  padding: "20px",
}));

export const LoginTitle = styled(Typography)(({ theme }) => ({
  fontSize: "25px",
  fontWeight: 700,
  textAlign: "center",
  lineHeight: "25px",
  color: theme.palette.primary.dark,
  marginTop: "10px",
}));

export const LoginSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: 600,
  textAlign: "center",
  lineHeight: "19px",
  color: "#777",
  marginTop: "10px",
}));

export const SocialLoginContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  gap: "20px",
  marginTop: "25px",
}));

export const StyledDivider = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginTop: "25px",
  marginBottom: "25px",
  gap: "10px",
}));

export const DividerText = styled(Typography)(({ theme }) => ({
  fontSize: "13px",
  fontWeight: 600,
  lineHeight: "19px",
  color: "#777",
}));

export const FormContainer = styled("form")(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const RememberMeContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginTop: "5px",
}));

export const RememberCheckbox = styled(Checkbox)(({ theme }) => ({
  color: theme.palette.primary.main,
  padding: "0px",
  "& .Mui-checked": {
    color: theme.palette.primary.main,
  },
  "& .MuiSvgIcon-root": {
    fontSize: "16px",
  },
}));

export const RememberText = styled(Typography)(({ theme }) => ({
  fontSize: "13px",
  fontWeight: 600,
  lineHeight: "14px",
  color: "#777",
  marginLeft: "2px",
}));

export const ForgotPassword = styled(Typography)(({ theme }) => ({
  fontSize: "13px",
  fontWeight: 600,
  lineHeight: "19px",
  color: theme.palette.primary.main,
  marginLeft: "auto",
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
  },
}));

export const LoginButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  borderRadius: "5px",
  padding: "10px",
  fontSize: "17px",
  fontWeight: 700,
  marginTop: "10px",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
  },
}));

export const RegisterLinkContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginTop: "10px",
  justifyContent: "center",
  marginBottom: "10px",
  gap: "5px",
}));

export const RegisterText = styled(Typography)(({ theme }) => ({
  fontSize: "13px",
  fontWeight: 600,
  lineHeight: "19px",
  color: theme.palette.primary.main,
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
  },
}));

export const ErrorMessage = styled(Typography)(({ theme }) => ({
  fontSize: "13px",
  fontWeight: 600,
  height: "30px",
  textAlign: "center",
  lineHeight: "14px",
  color: theme.palette.error.main,
}));
