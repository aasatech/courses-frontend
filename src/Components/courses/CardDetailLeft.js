import React from "react";
import Dropdown from "../Dropdown";

const CardDetailLeft = ({data}) => {
  return (
    <div className="">
      <figure className="relative w-full h-[428px]">
        <img
          className=" w-full rounded-xl object-cover object-center h-full "
          src="https://eduquest.itech-theme.com/wp-content/uploads/2019/05/course6-1.jpg"
          alt="nature image"
        />
        <figcaption className="absolute -bottom-16 flex w-full transition-all duration-500 lg:w-[calc(100%-4rem)] justify-between rounded border border-white bg-gray-100 py-14 px-6 shadow-lg shadow-black/5 saturate-200"></figcaption>
      </figure>
      <div className="relative mt-28">
        <div className="text-4xl font-bold ">{data.name}</div>
        <p className="text-justify mt-3">
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
        <Dropdown/>
      </div>
    </div>
  );
};

export default CardDetailLeft;
