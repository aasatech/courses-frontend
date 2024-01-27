import React from "react";
import CardDetail from "./CardDetail";
import CardDetailLeft from "./CardDetailLeft";

const CourseDetail = () => {
  return (
    <div className="md:grid block grid-cols-3  gap-5 m-10 2xl:px-48">
      <div className="col-span-2 mb-24">
        <CardDetailLeft/> 
      </div>
      <div className="w-full ">
        <CardDetail/>
      </div>
    </div>
  );
};

export default CourseDetail;
