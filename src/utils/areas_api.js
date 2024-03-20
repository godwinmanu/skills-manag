import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:3333/api/v1",
  headers: {
    Accept: "application/json",
    // "Content-Type": "multipart/form-data"
  },
});

export const getDepartments = () => {
  return API.get("/departments");
};

export const getTowns = (url) => {
  return API.get(url);
};

export const getDistricts = (url) => {
  return API.get(url);
};

export const getNeighborhoods = (url) => {
  return API.get(url);
};
