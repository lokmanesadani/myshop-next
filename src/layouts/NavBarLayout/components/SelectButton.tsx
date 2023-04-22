import { MenuItem, Select, Typography, styled } from "@mui/material";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const StyledSelect = styled(Select)(() => ({
  position: "absolute",
  width: "135px",
  height: "100%",
  backgroundColor: "#f0f0f0",
  zIndex: 1,
  borderRadius: "10px",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#e5e5e5",
  },
  "& .MuiSelect-select": {
    padding: "0",
    height: "40px",
    display: "flex",
    alignItems: "center",
    paddingLeft: "20px",
    paddingRight: "0px !important",
    fontSize: "14px",
  },

  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
}));

const selectItems = [
  "All",
  "Monitors",
  "Keyboards",
  "Mouses",
  "Headphones",
  "Laptops",
  "Desktops",
];

const OpenedIcon = styled(KeyboardArrowDownIcon)(() => ({
  fontSize: "20px",
  marginRight: "5px",
  color: "#00000099",
}));

const SelectButton = () => {
  const [value, setValue] = useState("All");

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };
  return (
    <StyledSelect
      value={value}
      onChange={handleChange}
      defaultValue={"All"}
      IconComponent={OpenedIcon}
      inputProps={{ "aria-label": "Without label" }}
    >
      {selectItems.map((item, index) => (
        <MenuItem
          sx={{
            fontSize: "14px",
          }}
          key={index}
          value={item}
        >
          <em>{item}</em>
        </MenuItem>
      ))}
    </StyledSelect>
  );
};

export default SelectButton;
