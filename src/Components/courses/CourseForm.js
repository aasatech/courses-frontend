"use client";
import React, { useEffect, useState } from "react";
import CartCourse from "./Cart";
import CartCheckBox from "./CartCheckBox";
import { fetchCourses } from "@/actions/Courses";
import { fetchCategorys } from "@/actions/Category";
import { fetchTags } from "@/actions/Tags";
function CourseForm() {
  const [data, setData] = useState([]);
  const [courses, setCourse] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    const DataCourse = async () => {
      try {
        const response = await fetchCourses();
        if (response.results) {
          console.log(response.results);
          setCourse(response.results);
        }
      } catch (error) {
        console.log(error);
      }
    };
    DataCourse();
    const DataCategory = async () => {
      try {
        const response = await fetchCategorys();
        if (response) {
          console.log(response);
          setCategories(response);
        }
      } catch (error) {
        console.log(error);
      }
    };
    DataCategory();

    const DataTags = async () => {
      try {
        const response = await fetchTags();
        if (response.results) {
          console.log(response.results);
          setTags(response.results);
        }
      } catch (error) {
        console.log(error);
      }
    };
    DataTags();
  }, []);
  console.log(courses);

  useEffect(() => {
    setData(courses);
  }, [courses]);

  useEffect(() => {
    const DataCourse = async () => {
      try {
        const response = await fetchCourses(selectedCategories, selectedTags);
        if (response.results) {
          console.log(response.results);
          setCourse(response.results);
        }
      } catch (error) {
        console.log(error);
      }
    };
    DataCourse();
  }, [selectedCategories, selectedTags]);

  const handleCheckboxCategoryChange = (id, event) => {
    const { checked } = event.target;
    console.log(id);
    if (checked) {
      setSelectedCategories((prevValues) => [...prevValues, id]);
    } else {
      setSelectedCategories((prevValues) =>
        prevValues.filter((val) => val !== id)
      );
    }
  };
  console.log(selectedCategories);

  const handleCheckboxTagChange = (id, event) => {
    const { checked } = event.target;
    if (checked) {
      setSelectedTags((prevValues) => [...prevValues, id]);
    } else {
      setSelectedTags((prevValues) => prevValues.filter((val) => val !== id));
    }
  };
  console.log(selectedTags);

  return (
    <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 gap-10  2xl:mx-52 xl:mx-10 lg:mx-10 md:mx-5 sm:mx-5 mt-14">
      <div>
        <CartCheckBox
          data={categories}
          label="Categories"
          handleonChange={handleCheckboxCategoryChange}
        />
        <CartCheckBox
          data={tags}
          label="Tags"
          handleonChange={handleCheckboxTagChange}
        />
      </div>
      <div className="2xl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-2">
        <div className="grid 2xl:grid-cols-3 xl:grid-cols-3  lg:grid-cols-2 md:grid-cols-1 :grid-cols-1 gap-4">
          {data?.map((course, index) => (
            <CartCourse course={course} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CourseForm;
