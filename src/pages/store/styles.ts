import { styled, Typography, Box, Checkbox } from "@mui/material";
import Image from "next/image";

export const StyledBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  marginTop: "2px",
  gap: "10px",
}));

export const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
  color: "#00000066",
  padding: "3px 0",
  "& .MuiSvgIcon-root": {
    fontSize: "16px",
  },
  // change color when hover
  "&:hover": {
    color: theme.palette.secondary.main,
  },
}));

export const StyledShowMore = styled(Typography)(() => ({
  fontSize: "11px",
  color: "#000",
  marginTop: "2px",
  marginBottom: "13px",
  display: "flex",
  alignItems: "center",

  cursor: "pointer",
  "&:hover": {
    color: "#ffa233",
    textDecoration: "underline",
  },
}));
export const FilterBox = styled(Box)(() => ({
  backgroundColor: "white",
  width: "100%",
  maxWidth: "200px",
  padding: "15px",
  borderRadius: "8px",
  boxShadow: "rgba(149, 157, 165, 0.7) 0px 0px 2px;",
}));
export const StyledFilterTitle = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: "bold",
  color: "#006FBA",
}));

// -------------- Card styles ----------------
export const CardBox = styled(Box)(() => ({
  backgroundColor: "#fff",
  borderRadius: "5px",
  padding: "13px",
  boxShadow: "rgba(149, 157, 165) 0px 0px 2px;",
  display: "flex",
  overflow: "hidden",
  flexDirection: "column",
  transition: "all 0.1s ease-in-out",
  "&:hover": {
    backgroundColor: "rgba(235, 240, 245)",
  },
}));

export const CardStyledImage = styled(Image)(() => ({
  height: "150px",
  width: "95%",
  margin: "auto",
  objectFit: "contain",
  objectPosition: "center",
  "@media (max-width: 600px)": {
    height: "100px",
    paddingBottom: "5px",
  },
  "@media (max-width: 900px)": {
    height: "130px",
    paddingBottom: "5px",
  },
}));

export const StyledCardTitle = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 600,
  color: theme.palette.primary.main,
}));

export const StyledCardText = styled(Typography)(({ theme }) => ({
  marginTop: "8px",
  fontSize: "13.5px",
  fontWeight: 600,
  display: "-webkit-box",
  overflow: "hidden",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  color: theme.palette.primary.dark,
  minHeight: "41px",
}));

export const CardTitleBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "row",
}));
export const CardPrice = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  lineHeight: "19px",
  fontWeight: "bold",
  color: theme.palette.secondary.dark,
}));
export const CardFooterBox = styled(Box)(() => ({
  marginTop: "15px",
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
}));

export const CardRating = styled(Typography)(({ theme }) => ({
  fontSize: "15px",
  lineHeight: "15px",
  fontWeight: "bold",
  color: theme.palette.secondary.main,
}));
export const CardDate = styled(Typography)(({ theme }) => ({
  fontSize: "13px",
  fontWeight: 600,
  color: "#999",
  margin: "0 auto",
}));
