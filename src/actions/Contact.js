import { apiEmail } from "@/utils/api";

export const sendContact = async (contact) => {
  const response = await apiEmail.post("/contact", contact);
  return response.data;
};
