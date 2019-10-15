import axios from "axios";
import { BASE_URL } from "./index";

const generateSearchQuery = (brandId, modelId) => {
  const query: any = {};
  if (brandId) query.brand = { $in: brandId };
  if (modelId) query.model = { $in: modelId };
  return query;
};

export const searchCars = async (brandId, modelId) => {
  const query = generateSearchQuery(brandId, modelId);
  return axios.post(`${BASE_URL}/cars/search`, query);
};

export const searchCarsCount = async (brandId = null, modelId = null) => {
  const query = generateSearchQuery(brandId, modelId);
  return axios.post(`${BASE_URL}/cars/search/count`, query);
};

export const getCar = async (carId) => {
  return axios.get(`${BASE_URL}/cars/${carId}`);
};
