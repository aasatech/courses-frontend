import axios from "axios";
export const api = axios.create({
  baseURL: "https://course-web-service.onrender.com/api/v1",
});

export const apiEmail = axios.create({
  baseURL: "https://courses-web-service-api-v1.onrender.com/api/v1",
});
