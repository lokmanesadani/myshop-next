import { Box, Slider, Typography, styled } from "@mui/material";
import React from "react";
import { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import { setMax, setMin } from "redux/slices/filterProductsSlice";

const minDistance = 10;
const StyledSlyder = styled(Slider)(({ theme }) => ({
  color: theme.palette.primary.main,
  height: 5,
  borderRadius: 5,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 16,
    width: 16,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    display: "none",
  },
}));
interface Props {
  values: number[];
}
const SliderStyled: FunctionComponent<Props> = ({ values }) => {
  const [value, setValue] = React.useState<number[]>(values || [0, 100]);
  const dispatch = useDispatch();
  const handleChange1 = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    console.log("newValue", newValue);

    if (activeThumb === 0) {
      setValue([newValue[0], value[1]]);
      if (newValue[0] === values[0]) dispatch(setMin(null));
      else dispatch(setMin(newValue[0]));
    } else {
      setValue([value[0], newValue[1]]);
      if (newValue[1] === values[1]) dispatch(setMax(null));
      else dispatch(setMax(newValue[1]));
    }
  };
  return (
    <>
      <Typography>Price range</Typography>
      <StyledSlyder
        getAriaLabel={() => "Minimum distance"}
        value={value}
        onChange={handleChange1}
        valueLabelDisplay="auto"
        disableSwap
        max={values[1]}
        min={values[0]}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Typography
          sx={{
            marginRight: "10px",
          }}
        >
          {value[0]}
        </Typography>{" "}
        -<Typography>{value[1]}</Typography>
      </Box>
    </>
  );
};

export default SliderStyled;
