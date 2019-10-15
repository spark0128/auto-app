import axios from "axios";
import { BASE_URL } from "./index";

export const getBrands = async () => {
  return axios.get(`${BASE_URL}/brands`);
};
