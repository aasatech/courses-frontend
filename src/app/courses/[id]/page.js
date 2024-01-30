import CourseDetail from "@/Components/courses/CourseDetail";
import React from "react";

const page = ({ params }) => {
  console.log(params.id)
  return <CourseDetail id={params.id} />;
};

export default page;
