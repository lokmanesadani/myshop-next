import { Badge, Box, styled, Avatar, Typography } from "@mui/material";

export const StyledNavContainer = styled(Box)(() => ({
  height: "70px",
  borderBottom: "1px solid #00000018",
  display: "flex",
}));

export const StyledNavBar = styled(Box)(() => ({
  height: "100%",
  width: "100%",
  display: "flex",
  gap: "35px",
  alignItems: "center",
  maxWidth: "1400px",
  margin: "0 auto",
  paddingRight: "20px",
  paddingLeft: "20px",
  "@media (max-width: 600px)": {
    paddingRight: "10px",
    paddingLeft: "10px",
  },
}));
export const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    padding: "0px",
    top: "1px",
    display: "flex",
    fontSize: "11px",
    alignItems: "center",
    justifyContent: "center",
    height: "16px",
    width: "16px",
    minWidth: "16px",
  },
}));

export const StyledNavLogo = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "25px",
  lineHeight: "25px",
  color: theme.palette.primary.main,
}));

export const StyledAvatar = styled(Avatar)(() => ({
  width: "35px",
  height: "35px",
  fontSize: "17px",
}));
