import { Box, Button } from "@mui/material";
import AuthenticationDialog from "layouts/NavBarLayout/components/AuthenticationDialog/AuthenticationDialog";
import React from "react";

const LoginButton = () => {
  const [open, setOpen] = React.useState(false);
  const [register, setRegister] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
    setRegister(false);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box>
      <Button
        onClick={handleClickOpen}
        sx={{
          backgroundColor: "primary.main",
          color: "primary.contrastText",
          fontWeight: 600,
          fontSize: "14px",
          lineHeight: "16px",
          borderRadius: "5px",
          padding: "10px 20px",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "primary.main",
          },
        }}
      >
        Log in
      </Button>
      <AuthenticationDialog {...{ open, handleClose, register, setRegister }} />
    </Box>
  );
};

export default LoginButton;
