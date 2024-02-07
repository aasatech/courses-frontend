"use client";
import React, { useState } from "react";
import Card from "./Card";
import CardInfor from "./CardInfor";
import Pagination from "./Pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Courses = ({ data, tags, categories, meta }) => {
  const searchParams = useSearchParams();
  const [categoryIds, setSelectCategory] = useState(
    Array.from(searchParams.getAll("categories")).map(Number)
  );
  const [tagIds, setSelectTag] = useState(
    Array.from(searchParams.getAll("tags")).map(Number)
  );
  const router = useRouter();
  const pathname = usePathname();

  const handlePageClick = (pageNumber) => {
    const param = new URLSearchParams(searchParams.toString());
    param.set("page", pageNumber);
    router.push(pathname + "?" + param.toString());
  };

  const handleChangeCategory = (e, id) => {
    const { checked } = e.target;
    const param = new URLSearchParams(searchParams.toString());
    param.set("page", 1);
    if (checked) {
      param.append("categories", id);
      router.push(pathname + "?" + param.toString());
      setSelectCategory((pre) => [...pre, id]);
    } else {
      param.delete("categories", id);
      router.push(pathname + "?" + param.toString());
      setSelectCategory((pre) => pre.filter((cate) => cate !== id));
    }
  };

  const handleChangeTag = (e, id) => {
    const { checked } = e.target;
    const param = new URLSearchParams(searchParams.toString());
    param.set("page", 1);
    if (checked) {
      param.set("page", 1);
      param.append("tags", id);
      router.push(pathname + "?" + param.toString());
      setSelectTag((pre) => [...pre, id]);
    } else {
      param.delete("tags", id);
      router.push(pathname + "?" + param.toString());
      setSelectTag((pre) => pre.filter((tag) => tag !== id));
    }
  };

  return (
    <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 gap-10  2xl:mx-52 xl:mx-10 lg:mx-10 md:mx-5 sm:mx-5 mt-14">
      <div>
        <div>
          <CardInfor
            data={categories}
            selectedIds={categoryIds}
            label="categories"
            onChange={handleChangeCategory}
          />
        </div>
        <div className="mt-5">
          <CardInfor
            data={tags}
            selectedIds={tagIds}
            label="tags"
            onChange={handleChangeTag}
          />
        </div>
      </div>
      <div className="2xl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-2">
        <div className="grid 2xl:grid-cols-3 xl:grid-cols-3  lg:grid-cols-2 md:grid-cols-1 :grid-cols-1 gap-4">
          {data?.map((course, index) => (
            <Card course={course} key={index} />
          ))}
        </div>
        <div className="flex justify-center my-10">
          <Pagination
            pageCount={meta.totalPage}
            onPageChange={handlePageClick}
            initialPage={meta.currentPage + 1}
          />
        </div>
      </div>
    </div>
  );
};

export default Courses;
