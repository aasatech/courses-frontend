import { api } from "../utils/api";

export const courses = async (selectCategory, selectTag, page = 1) => {
  const response = await api.get(`/courses?page=${page}&per_page=9`, {
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
