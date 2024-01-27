"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import CardInfor from "./CardInfor";
import { courses as course } from "@/actions/courses";
import { categories as category } from "@/actions/categoies";
import { tags as tag } from "@/actions/tags";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectCategory, setSelectCategory] = useState([]);
  const [selectTag, setSelectTag] = useState([]);
  const [data, setData] = useState([]);
  // const []

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await course();
        setCourses(response.results);
        console.log("course all",response)
      } catch (error) {
        console.log("error", error);
      }
    };
    const fetchCategories = async () => {
      try {
        const response = await category();
        setCategories(response);
        // console.log("categories", response)
      } catch (error) {
        console.log("error", error);
      }
    };
    const fetchTags = async () => {
      try {
        const response = await tag();
        setTags(response.results);
        // console.log("tags",response)
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchCourses();
    fetchCategories();
    fetchTags();
  }, []);

  useEffect(() => {
    setData(courses);
  }, [courses]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await course(selectCategory,selectTag);
        setCourses(response.results);
        console.log("course",response)
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchCourses()
    // setData(tags.filter((tag)=>selectCategory.includes(value.) ))
  }, [selectCategory, selectTag]);


//   console.log(courses);
  const handleChangeCategory = (e, id) => {
    const { checked } = e.target;
    // console.log("id", id)
    if (checked) {
      setSelectCategory((pre) => [...pre, id]);
    } else {
      setSelectCategory((pre) => pre.filter((cate) => cate !== id));
    }
  };

  const handleChangeTag = (e, id) => {
    const { checked } = e.target;
    if (checked) {
      setSelectTag((pre) => [...pre, id]);
      console.log(id);
    } else {
      setSelectTag((pre) => pre.filter((tag) => tag !== id));
    }
  };

  // console.log("Tag", selectTag)
  // console.log("select", selectCategory)

  // data.filter((value)=>categories.includes(value.category_id))

  //     console.log("courses",)
  //     console.log("select category", selectCategory)

  //    console.log("tag", tags)

  return (
    <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 gap-10  2xl:mx-52 xl:mx-10 lg:mx-10 md:mx-5 sm:mx-5 mt-14">
      <div>
        <div>
          <CardInfor
            data={categories}
            label="categories"
            onChange={handleChangeCategory}
          />
        </div>
        <div className="mt-5">
          <CardInfor data={tags} label="tags" onChange={handleChangeTag} />
        </div>
      </div>
      <div className="2xl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-2">
        <div className="grid 2xl:grid-cols-3 xl:grid-cols-3  lg:grid-cols-2 md:grid-cols-1 :grid-cols-1 gap-4">
          {data?.map((course, index) => (
            <Card course={course} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
