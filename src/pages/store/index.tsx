import { Box, styled } from "@mui/material";
import NavBarLayout from "layouts/NavBarLayout/NavBarLayout";
import FilterComponent from "pages/store/components/FilterComponent";
import ProductsList from "pages/store/components/ProductsList";
const StyledBox = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  paddingTop: "10px",
  gap: "20px",
  // if width is less than 1200px, then flex-direction is column
  "@media (min-width: 600px)": {
    flexDirection: "row",
  },
}));

const Home = () => {
  return (
    <NavBarLayout>
      <StyledBox>
        <FilterComponent />
        <ProductsList />
      </StyledBox>
    </NavBarLayout>
  );
};

export default Home;
