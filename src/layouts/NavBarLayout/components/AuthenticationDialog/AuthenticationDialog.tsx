import { Dialog } from "@mui/material";
import LoginForm from "layouts/NavBarLayout/components/LoginForm/LoginForm";
import RegisterForm from "layouts/NavBarLayout/components/RegisterForm/RegisterForm";

const AuthenticationDialog = ({
  open,
  handleClose,
  register,
  setRegister,
}: {
  open: boolean;
  handleClose: () => void;
  register: boolean;
  setRegister: (value: boolean) => void;
}) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      {register ? (
        <RegisterForm setRegister={setRegister} />
      ) : (
        <LoginForm setRegister={setRegister} />
      )}
    </Dialog>
  );
};

export default AuthenticationDialog;
