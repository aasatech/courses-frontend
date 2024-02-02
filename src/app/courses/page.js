import React from "react";
import Courses from "../../Components/courses/Courses";
import { fetchCourses } from "../../actions/courses";
import { categories } from "../../actions/categoies";
import { fetchTags } from "../../actions/tags";
const page = async ({ searchParams }) => {
  const categoryIds = searchParams.categories;
  const tagIds = searchParams.tags;
  console.log(searchParams);
  const { data, meta } = await fetchCourses(
    categoryIds,
    tagIds,
    searchParams.page || 1
  );
  const categoryData = await categories();
  const tagData = await fetchTags();
  return (
    <Courses
      searchParams={searchParams}
      data={data}
      meta={meta}
      categories={categoryData}
      tags={tagData}
    />
  );
};

export default page;
