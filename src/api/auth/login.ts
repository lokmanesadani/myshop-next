import axios, { AxiosResponse } from "axios";

export const isLoggedIn = async () => {
  const res: AxiosResponse = await axios.get(
    process.env.NEXT_PUBLIC_API_URL + "/auth/isLoggedIn",
    {
      withCredentials: true,
    }
  );
  return res;
};
