import { createTheme } from "@mui/material";
import "typeface-cairo";
import "typeface-lora";
import "typeface-poppins";
export default createTheme({
  palette: {
    primary: {
      main: "#006FBA",
      dark: "#005698",
    },
    secondary: {
      main: "#FFB71C",
      dark: "#FF9000",
    },
    error: {
      main: "#FF5050",
    },
    success: {
      main: "#00C853",
    },
  },
  typography: {
    fontFamily: "Cairo",
    fontSize: 14,
    subtitle1: {
      fontSize: "9px",
      fontWeight: 600,
    },
    subtitle2: {
      fontSize: "11px",
      fontWeight: 600,
    },
    body1: {
      fontSize: "14px",
      fontWeight: 600,
    },
    body2: {
      fontSize: "17px",
      fontWeight: 600,
    },
    h1: {
      fontSize: "30px",
      fontWeight: 700,
    },
    h2: {
      fontSize: "25px",
      fontWeight: 700,
    },
    h3: {
      fontSize: "20px",
      fontWeight: 700,
    },
    h4: {
      fontSize: "17px",
      fontWeight: 700,
      color: "#444",
    },
    h5: {
      fontSize: "14px",
      fontWeight: 700,
    },
    h6: {
      fontSize: "11px",
      fontWeight: 700,
    },
    allVariants: {
      color: "#005698",
    },
    button: {
      textTransform: "none",
      text: {
        fontSize: "14px",
        fontWeight: 600,
        color: "#ffffff",
      },
    },
  },
});
const colors = [
  "#ffb71c",
  "#ffdb8e",
  "#ffedc7",
  "#ffffff",
  "#8baec2",
  "#5186a3",
  "#006FBA",
];
