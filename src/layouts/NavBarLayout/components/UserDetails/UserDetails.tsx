import { RootState } from "redux/store";
import { useDispatch, useSelector } from "react-redux";
import { StyledAvatar, UserDetailsItem } from "layouts/NavBarLayout/style";
import { Box, Divider, Popover, Typography } from "@mui/material";

import LogoutIcon from "@mui/icons-material/Logout";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { UserDetailsHeader } from "layouts/NavBarLayout/components/UserDetails/styles";
import Axios from "api/Axios";
import { logout } from "redux/slices/authSlice";
import { useState } from "react";
const items = [
  {
    title: "Account",
    icon: PermIdentityIcon,
  },
  {
    title: "Orders",
    icon: ShoppingCartOutlinedIcon,
  },
  {
    title: "Favorites",
    icon: FavoriteBorderIcon,
  },
  {
    title: "Become a seller",
    icon: StorefrontIcon,
  },
];

const UserDetails = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutUser = () => {
    Axios.get("auth/logout").then(() => {
      dispatch(logout());
    });
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <StyledAvatar
        sx={{ "&:hover": { cursor: "pointer" } }}
        onClick={handleClick}
        src={user?.picture ?? ""}
        alt=""
      >
        {user?.firstName?.toUpperCase().charAt(0)}
      </StyledAvatar>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <UserDetailsHeader>
          <StyledAvatar
            sx={{ width: "45px", height: "45px" }}
            src={user?.picture ?? ""}
            alt=""
          >
            {user?.firstName?.toUpperCase().charAt(0)}
          </StyledAvatar>
          <Box>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "18px",
              }}
              color={"primary.dark"}
            >
              {user?.firstName + " " + user?.lastName}
            </Typography>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "16px",
              }}
              color={"primary.dark"}
            >
              {user?.email}
            </Typography>
          </Box>
        </UserDetailsHeader>
        <Divider />
        <Box
          sx={{
            paddingY: "10px",
          }}
        >
          {items.map((item, index) => (
            <UserDetailsItem key={index}>
              <item.icon sx={{ height: "20px" }} />
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "15px",
                }}
              >
                {item.title}
              </Typography>
            </UserDetailsItem>
          ))}

          <UserDetailsItem onClick={logoutUser}>
            <LogoutIcon sx={{ height: "18px" }} />
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "15px",
              }}
            >
              Logout
            </Typography>
          </UserDetailsItem>
        </Box>
      </Popover>
    </>
  );
};

export default UserDetails;
