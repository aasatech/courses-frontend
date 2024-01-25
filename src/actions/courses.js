import { api } from "@/utils/api";

export const courses = async () => {
  const response = await api.get("/courses?pages=1&pageSize=10");
  return response.data;
};
