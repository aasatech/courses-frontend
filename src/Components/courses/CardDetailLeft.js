import React, { useEffect, useState } from "react";
import Dropdown from "../Dropdown";
import Image from "next/image";
import Rating from "./Rating";
const CardDetailLeft = ({ data }) => {
  console.log(data);
  return (
    <div className="">
      <figure className="relative w-full h-[428px]">
        <Image
          width={1000}
          height={1200}
          className=" w-full rounded-xl object-cover object-center h-full "
          src={data.image_url}
          alt="nature image"
        />
        <figcaption className="absolute -bottom-16 flex w-full transition-all duration-500 lg:w-[calc(100%-4rem)]  justify-between rounded border border-white bg-gray-100 py-6 px-6 shadow-lg shadow-black/5 saturate-200">
          <div className="flex mx-auto">
            <div className=" block xl:lg:grid grid-cols-3 xl:divide-x-2  divide-pink-500">
              <div className="px-5 sm:py-5 flex gap-5">
                <Image
                  className="rounded-full border-2 border-black"
                  height={70}
                  width={70}
                  src="https://eduquest.itech-theme.com/wp-content/uploads/2019/05/avatar4-1.png"
                />
                <div>
                  <h1 className="text-xl font-bold">SK AL</h1>
                  <h5 className="">Sr. Instructor</h5>
                </div>
              </div>
              <div className="px-10 sm:py-5">
                <h1 className="text-xl font-bold">Category:</h1>
                {data?.category?.name}
              </div>
              <div className="px-10 sm:py-5">
                <h5 className="font-bold">3 Reviews:</h5>

                <div class="flex items-center">
                  <svg
                    class="w-4 h-4 text-yellow-300 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    class="w-4 h-4 text-yellow-300 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    class="w-4 h-4 text-yellow-300 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    class="w-4 h-4 text-yellow-300 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </figcaption>
      </figure>
      <div className="relative mt-28">
        <div className="text-4xl font-bold ">{data.name}</div>
        <p className="text-justify mt-3 line-clamp-6">
          Are you new to PHP or need a refresher? Then this course will help you
          get all the fundamentals of Procedural PHP, Object Oriented PHP,
          MYSQLi and ending the course by building a CMS system similar to
          WordPress, Joomla or Drupal. Knowing PHP has allowed me to make enough
          money to stay home and make courses like this one for students all
          over the world. Being a PHP developer can allow anyone to make really
          good money online and offline, developing dynamic applications.
          Knowing PHP will allow you to build web applications, websites or
          Content Management systems, like WordPress, Facebook, Twitter or even
          Google. There is no limit to what you can do with this knowledge. PHP
          is one of the most important web programming languages to learn, and
          knowing it, will give you SUPER POWERS in the web development world
          and job market place. Why? Because Millions of websites and
          applications (the majority) use PHP. You can find a job anywhere or
          even work on your own, online and in places like freelancer or Odesk.
          You can definitely make a substantial income once you learn it. I will
          not bore you :) I take my courses very seriously but at the same time
          I try to make it fun since I know how difficult learning from an
          instructor with a monotone voice or boring attitude is. This course is
          fun, and when you need some energy to keep going, you will get it from
          me. My Approach Practice, practice and more practice. Every section
          inside this course has a practice lecture at the end, reinforcing
          everything with went over in the lectures. I also created a small
          application the you will be able to download to help you practice PHP.
          To top it off, we will build and awesome CMS like WordPress, Joomla or
          Drupal.
        </p>
      </div>

      <div className="text-2xl font-bold mt-5">Course Content</div>

      <div>
        <Dropdown data={data.chapters} label="Advance Concepts" />
        <Dropdown data={[]} label="Basic Concepts" />
      </div>

      <div className="m-10">Student Ratings & Reviews</div>

      <div className="">
        <Rating />
      </div>
    </div>
  );
};

export default CardDetailLeft;
