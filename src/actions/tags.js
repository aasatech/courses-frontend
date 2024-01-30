import { api } from "../utils/api";
export const tags = async () => {
  const response = await api.get("/tags");
  return response.data;
};
