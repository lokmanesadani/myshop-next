import axios from "axios";

const usePrivateAxios = () => {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
    headers: {
      "Content-type": "application/json",
    },
  });
};

export default usePrivateAxios;
