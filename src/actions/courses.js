import { api } from "../utils/api";

export const courses = async (selectCategory, selectTag) => {
  const response = await api.get("/courses?pages=0&pageSize=50", {
    params: {
      category_ids: selectCategory,
      tags: selectTag,
    },
  });
  return response.data;
};

export const coursesDetail = async (id) => {
  const response = await api.get(`/courses/${id}`);
  return response;
};
