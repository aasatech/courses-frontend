import { api } from "@/utils/api";
export const fetchCourses = async (selectedCategory, selectTags) => {
  const response = await api.get("/courses?pages=0&pageSize=50", {
    params: {
      category_ids: selectedCategory,
      tags: selectTags,
    },
  });
  return response.data;
};
