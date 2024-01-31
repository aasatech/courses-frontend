import { api } from "../utils/api";

export const fetchTags = async () => {
  const response = await api.get("/tags");
  return response.data;
};
