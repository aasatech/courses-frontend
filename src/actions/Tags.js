import { api } from "@/utils/api";
export const fetchTags = async () => {
  const response = await api.get("/tags?page=", 2);
  return response.data;
};
