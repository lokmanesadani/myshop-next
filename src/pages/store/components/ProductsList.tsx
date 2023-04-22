import Grid from "@mui/material/Unstable_Grid2";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "api/Products";
import ProductItem from "pages/store/components/ProductItem";
import useWindowWidth from "hooks/useWindowWidth";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
type Item = {
  id: number;
  label: string;
  description: string;
  name: string;
  date: string;
  price: number;
  image: string;
  rating: number;
};

const getMissingItems = (data: Item[]) => {
  const itemsPerRow = [2, 3, 4];
  const missingItems = itemsPerRow.map((item) => {
    const missing = item - (data.length % item);
    if (missing === item) {
      return 0;
    }
    return missing;
  });
  return missingItems;
};

const itemsToAdd = (missingItems: number[], width: number) => {
  if (width < 600) {
    return 0;
  }
  if (width < 900) {
    return missingItems[0];
  }
  if (width < 1200) {
    return missingItems[1];
  }
  return missingItems[2];
};

const ProductsList = () => {
  const router = useRouter();
  console.log(router.query);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  const windowWidth = useWindowWidth();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error.</div>;
  }

  return (
    <Box>
      <Typography
        sx={{
          fontSize: "20px",
          fontWeight: "bold",
          color: "primary.dark",
          marginBottom: "12px",
        }}
      >
        1 - 16 from 602 results for ‘asus’
      </Typography>
      <Grid
        height={"fit-content"}
        justifyContent={"center"}
        container
        rowSpacing={3}
        columnSpacing={3}
      >
        {data.data.map((item: Item) => (
          <Grid maxWidth={300} key={item.id} sm={6} md={4} lg={3}>
            <ProductItem item={item} />
          </Grid>
        ))}
        {Array.from(
          { length: itemsToAdd(getMissingItems(data.data), windowWidth) },
          (_, index) => (
            <Grid maxWidth={300} key={index} sm={6} md={4} lg={3} />
          )
        )}
      </Grid>
    </Box>
  );
};

export default ProductsList;
