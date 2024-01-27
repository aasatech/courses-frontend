import { api } from "@/utils/api";
export const fetchCategorys = async () => {
  const response = await api.get("/categories");
  return response.data;
};
