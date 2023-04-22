import { Box, styled } from "@mui/material";
import NavBar from "layouts/NavBarLayout/components/NavBar/NavBar";
const Container = styled(Box)(() => ({
  maxWidth: "1400px",
  margin: "0 auto",
  paddingRight: "20px",
  paddingLeft: "20px",
  "@media (max-width: 600px)": {
    paddingRight: "10px",
    paddingLeft: "10px",
  },
}));

const NavBarLayout = (props: any) => {
  return (
    <Box>
      <NavBar />
      <Container>{props.children}</Container>
    </Box>
  );
};

export default NavBarLayout;
