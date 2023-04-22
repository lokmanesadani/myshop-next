import { Box, TextField, Button, Typography, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SelectButton from "layouts/NavBarLayout/components/SelectButton";

const StyledSearchBar = styled(Box)(() => ({
  width: "100%",
  maxWidth: "600px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "row",
  position: "relative",
}));

const StyledTextField = styled(TextField)(() => ({
  backgroundColor: "f4f4f4",
  "& .MuiFilledInput-underline": {
    "&:before": {
      borderBottom: "none",
    },
    "&:after": {
      borderBottom: "none",
    },
  },
  "& .MuiInputBase-input": {
    fontSize: "14px",
    backgroundColor: "transparent",
  },

  "& .MuiFilledInput-input": {
    padding: "0 20px 0 150px",
    height: "100%",
  },
  "& .MuiFilledInput-root": {
    borderRadius: "10px",
    padding: "0",
    height: "40px",
    backgroundColor: "#f6f6f6",
    "&:hover": {
      "&:not(.Mui-disabled):before": {
        borderBottom: "none",
      },
      backgroundColor: "#f3f3f3",
    },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  height: "100%",
  width: "10px",
  padding: "5px 10px",
  gap: "6px",
  borderRadius: "5px",
  color: "#fff",
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: "transparent",
  },
}));
const SearchBar = () => {
  return (
    <StyledSearchBar>
      <SelectButton />
      <StyledTextField
        fullWidth
        hiddenLabel
        variant="filled"
        placeholder="Search"
        InputProps={{
          endAdornment: (
            <StyledButton>
              <SearchIcon
                sx={{
                  fontSize: "25px",
                  color: "#00000055",
                  "&:hover": {
                    color: "#00000088",
                  },
                }}
              />
            </StyledButton>
          ),
        }}
      />
    </StyledSearchBar>
  );
};

export default SearchBar;
