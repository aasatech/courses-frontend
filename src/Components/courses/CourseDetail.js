'use client'
import React, { useEffect, useState } from "react";
import CardDetail from "./CardDetail";
import CardDetailLeft from "./CardDetailLeft";
import { coursesDetail } from "@/actions/courses";

const CourseDetail = ({id}) => {
  const [courseDetail, setCourseDetail] = useState({});

  useEffect(()=>{
    const fetchCourseDetail = async()=>{
      try{
        const response = await coursesDetail(id)
        setCourseDetail(response)
        // console.log("response",response)
      } catch (error) {
        console.log("error", error)
      }
    }
    fetchCourseDetail()
  },[id])
  // console.log("course Detail",courseDetail)

  return (
    <div className="md:grid block grid-cols-3 gap-5 m-10 2xl:px-48">
      <div className="col-span-2 mb-24">
        <CardDetailLeft data={courseDetail} />
      </div>
      <div className="w-full ">
        <CardDetail />
      </div>
    </div>
  );
};

export default CourseDetail;
