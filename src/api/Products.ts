import axios from "axios";

export const getProducts = () => {
  return axios
    .get(process.env.NEXT_PUBLIC_API_URL + "/products")
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
