import { Typography } from "@mui/material";
import { StyledBox, StyledCheckbox } from "pages/store/styles";
import React from "react";
import { FunctionComponent, useEffect } from "react";

import { useDispatch } from "react-redux";
import { setConditions } from "redux/slices/filterProductsSlice";
const filterList = ["New", "Used"];

const ConditionFilter: FunctionComponent = ({}) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = React.useState<string[]>([]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setChecked([...checked, event.target.value]);
    } else {
      setChecked(checked.filter((item) => item !== event.target.value));
    }
  };

  useEffect(() => {
    dispatch(setConditions(checked));
  }, [checked]);
  return (
    <>
      <Typography variant="h4">Conditon</Typography>
      {filterList.map((condition) => (
        <StyledBox key={condition}>
          <StyledCheckbox
            value={condition}
            color="secondary"
            onChange={handleChange}
          />
          <Typography>{condition}</Typography>
        </StyledBox>
      ))}
    </>
  );
};

export default ConditionFilter;
