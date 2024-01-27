import { api } from "@/utils/api";

export const userRegister = async (newUser) => {
  const response = await api.post("/auth/register", newUser);
  return response.data;
};

export const userLogin = async (User) => {
  const response = await api.post("/auth/login", User);
  return response.data;
};

export const userGoogle = async () => {
  const response = await api.post("/auth/google");
  return response.data;
};
