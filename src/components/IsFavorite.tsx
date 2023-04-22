import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box } from "@mui/material";

const IsFavorite = ({ isFav }: { isFav: boolean }) => {
  const [isFavorite, setIsFavorite] = useState(isFav);
  return (
    <Box
      sx={{
        cursor: "pointer",
        display: "flex",
      }}
      onClick={() => {
        setIsFavorite(!isFavorite);
      }}
    >
      {isFavorite ? (
        <FavoriteIcon
          sx={{
            color: "error.main",
            fontSize: "20px",
            lineHeight: "20px",
          }}
        />
      ) : (
        <FavoriteBorderIcon
          sx={{
            color: "error.main",
            fontSize: "20px",
            lineHeight: "20px",
          }}
        />
      )}
    </Box>
  );
};

export default IsFavorite;
