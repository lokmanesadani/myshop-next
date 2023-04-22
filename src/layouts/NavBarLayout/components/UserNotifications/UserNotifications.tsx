import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Popover, Typography, useTheme, styled } from "@mui/material";
import { FavItemContainer } from "layouts/NavBarLayout/components/UserNotifications/style";
import { StyledBadge } from "layouts/NavBarLayout/style";
import Image from "next/image";
import { useState } from "react";

const domiProducts = [
  {
    id: 1,
    price: 100,
    type: "Laptop",
    name: "Macbook Air",
    image: "/images/macbookair.png",
    brand: "Apple",
    seller: "Domi",
    description:
      "this is a test description for the product to see how it looks like in the notification",
  },

  {
    id: 2,
    price: 100,
    type: "Laptop",
    name: "Macbook Air",
    image: "/images/macbookair.png",
    brand: "Apple",
    seller: "Domi",
    description:
      "this is a test description for the product to see how it looks like in the notification",
  },
  {
    id: 3,
    price: 100,
    type: "Laptop",
    name: "Macbook Air",
    image: "/images/macbookair.png",
    brand: "Apple",
    seller: "Domi",
    description:
      "this is a test description for the product to see how it looks like in the notification but this is a long description",
  },
  {
    id: 4,
    price: 100,
    type: "Laptop",
    name: "Macbook Air",
    image: "/images/macbookair.png",
    brand: "Apple",
    seller: "Domi",
    description:
      "this is a test description for the product to see how it looks like in the notification but this is a long description",
  },
  {
    id: 5,
    price: 100,
    type: "Laptop",
    name: "Macbook Air",
    image: "/images/macbookair.png",
    brand: "Apple",
    seller: "Domi",
    description:
      "this is a test description for the product to see how it looks like in the notification but this is a long description",
  },
  {
    id: 6,
    price: 100,
    type: "Laptop",
    name: "Macbook Air",
    image: "/images/macbookair.png",
    brand: "Apple",
    seller: "Domi",
    description:
      "this is a test description for the product to see how it looks like in the notification but this is a long description",
  },
];
const getAgo = (date: string) => {
  const now = new Date();
  const messageDate = new Date(date);
  const diff = now.getTime() - messageDate.getTime();

  const daysAgo = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hoursAgo = Math.floor(diff / 1000 / 60 / 60);
  const minutesAgo = Math.floor(diff / 1000 / 60);
  if (daysAgo > 0) return `${daysAgo} days ago`;
  if (hoursAgo > 0) return `${hoursAgo} hours ago`;
  return `${minutesAgo} min ago`;
};
const StyledImage = styled(Image)(() => ({
  padding: "5px",
  objectFit: "contain",
}));
const UserNotifications = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <StyledBadge onClick={handleClick} badgeContent={4} color="error">
        <FontAwesomeIcon
          fontSize={"18px"}
          color={theme.palette.primary.dark}
          icon={faBell}
        />
      </StyledBadge>
      <Popover
        sx={{
          marginTop: "5px",

          "& .MuiPopover-paper": {
            padding: "5px 0",
            width: "270px",
            maxHeight: "400px",
            "&::-webkit-scrollbar": {
              width: "0.4em",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: theme.palette.grey[100],
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: theme.palette.grey[300],
              borderRadius: "10px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: theme.palette.grey[400],
            },
          },
        }}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        {domiProducts.map((product) => (
          <Box key={product.id}>
            <FavItemContainer>
              <StyledImage width={70} height={70} alt="" src={product.image} />
              <Box
                sx={{
                  flex: 1,
                }}
              >
                <Typography
                  sx={{
                    lineHeight: "16px",
                    fontWeight: "bold",
                    fontSize: "15px",
                    color: theme.palette.primary.dark,
                  }}
                >
                  {product.seller}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "5px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "13px",
                      fontWeight: 600,
                      lineHeight: "15px",
                      color: theme.palette.primary.dark,
                      display: "-webkit-box",
                      overflow: "hidden",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 1,
                    }}
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "bold",
                      lineHeight: "15px",
                      color: theme.palette.secondary.dark,
                      marginLeft: "auto",
                    }}
                  >
                    {product.price}$
                  </Typography>
                </Box>
              </Box>
            </FavItemContainer>
          </Box>
        ))}
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 600,
            lineHeight: "15px",
            color: theme.palette.primary.main,
            padding: "5px 15px",
            cursor: "pointer",
            "&:hover": {
              color: theme.palette.primary.dark,
              textDecoration: "underline",
            },
          }}
        >
          See more
        </Typography>
      </Popover>
    </>
  );
};

export default UserNotifications;
