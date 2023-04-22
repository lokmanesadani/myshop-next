import { Button, Slider, Typography } from "@mui/material";
import { brands, CPU, GPU } from "constants/FilterList";
import Filter from "pages/store/components/Filter";
import ConditionFilter from "pages/store/components/ConditionFilter";
import SliderStyled from "pages/store/components/Slider";
import { FilterBox, StyledFilterTitle } from "pages/store/styles";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const items = [
  {
    title: "Brands",
    filterList: brands,
  },
  {
    title: "CPU",
    filterList: CPU,
  },
  {
    title: "GPU",
    filterList: GPU,
  },
];

const FilterComponent = () => {
  const { condition, filter, range } = useSelector(
    (state: any) => state.filterProducts
  );
  console.log({
    ...(condition.length > 0 && { condition }),
    ...(Object.keys(filter).length > 0 && { filter }),
    ...(Object.keys(range).length > 0 && { range }),
  });

  const router = useRouter();
  return (
    <FilterBox>
      <Typography variant="h3" color="primary.dark">
        Filter by
      </Typography>
      <Button
        sx={{
          width: "100%",
          marginY: "10px",
          backgroundColor: "primary.main",
          color: "#fff",
          "&:hover": {
            backgroundColor: "primary.dark",
          },
        }}
        onClick={() => {
          console.log("Apply");
          router.push({
            pathname: "/store",
            query: {
              ...(condition.length > 0 && { condition }),
              ...(filter.length > 0 && { filter }),
              ...(Object.keys(range).length > 0 && range),
            },
          });
        }}
      >
        Apply
      </Button>
      <SliderStyled values={[10, 213]} />
      <ConditionFilter />

      {items.map((item) => (
        <Filter
          key={item.title}
          title={item.title}
          filterList={item.filterList}
        />
      ))}
    </FilterBox>
  );
};

export default FilterComponent;
