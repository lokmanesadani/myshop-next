import { Box, styled } from "@mui/material";

const FavItemContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: "10px",
  transition: "all 0.2s ease-in-out",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.palette.grey[100],
  },
}));
const FavItemImage = styled(Box)(({ theme }) => ({
  width: "70px",
  padding: "5px",
}));
export { FavItemContainer, FavItemImage };
