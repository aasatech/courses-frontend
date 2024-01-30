import { api } from "../utils/api";

export const sendContact = async (contact) => {
  const response = await api.post("/contact", contact);
  return response.data;
};
