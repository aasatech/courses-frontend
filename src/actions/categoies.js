import { api } from "../utils/api";

export const categories = async () => {
  const response = await api.get("/categories");
  return response.data;
};
