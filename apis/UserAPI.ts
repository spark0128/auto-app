import axios from "axios";
import { BASE_URL } from "./index";
import AuthTokenService from "../services/AuthTokenService";

export const getMe = async () => {
  const token = await AuthTokenService.getToken();
  return axios.get(`${BASE_URL}/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
