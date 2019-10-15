import axios from "axios";
import { BASE_URL } from "./index";

export const requestVerification = (phoneNumber: string) => {
  return axios.post(`${BASE_URL}/verifications`, {
    phoneNumber,
  });
};

export const confirmVerification = (verificationId: string, code: string) => {
  return axios.put(`${BASE_URL}/verifications/${verificationId}/confirm`, {
    code,
  });
};

export const signup = ({ firstName, lastName, username, phoneNumber, password }) => {
  return axios.post(`${BASE_URL}/signup`, {
    firstName,
    lastName,
    username,
    phoneNumber,
    password,
  });
};

export const signin = (username: string, password: string) => {
  return axios.post(`${BASE_URL}/signin`, {
    username,
    password,
  });
};
