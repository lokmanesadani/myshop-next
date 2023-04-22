import { Collapse, Divider, Typography } from "@mui/material";
import { StyledBox, StyledCheckbox, StyledShowMore } from "pages/store/styles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { setFilter } from "redux/slices/filterProductsSlice";
import { length } from "assert";

type FilterProps = {
  title: string;
  filterList: string[];
};
interface MyObject {
  name?: string;
}
const Filter = ({ title, filterList }: FilterProps) => {
  const [show, setShow] = React.useState(false);
  const [checked, setChecked] = React.useState<string[]>([]);
  const dispatch = useDispatch();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setChecked([...checked, event.target.value]);
    } else {
      setChecked(checked.filter((item) => item !== event.target.value));
    }
  };
  useEffect(() => {
    const obj: MyObject = {};
    obj[title] = checked;

    dispatch(setFilter(checked.length > 0 ? obj : {}));
  }, [checked]);
  const showed = Math.floor(filterList.length / 3);

  return (
    <>
      <Divider
        sx={{
          marginY: "10px",
        }}
      />
      <Typography>{title}</Typography>
      {filterList.slice(0, showed).map((brand, index) => (
        <StyledBox key={index}>
          <StyledCheckbox
            value={brand}
            color="secondary"
            onChange={handleChange}
          />
          <Typography>{brand}</Typography>
        </StyledBox>
      ))}
      <Collapse in={show} timeout="auto">
        {filterList.slice(showed, filterList.length).map((brand, index) => (
          <StyledBox key={index}>
            <StyledCheckbox
              value={brand}
              color="secondary"
              onChange={handleChange}
            />
            <Typography>{brand}</Typography>
          </StyledBox>
        ))}
      </Collapse>
      <StyledShowMore onClick={() => setShow(!show)}>
        {show ? "Show less" : "Show more"}
        {show ? (
          <RemoveIcon
            sx={{
              height: "10px",
            }}
          />
        ) : (
          <AddIcon
            sx={{
              height: "10px",
            }}
          />
        )}
      </StyledShowMore>
    </>
  );
};

export default Filter;
