"use client";
import React, { useEffect, useState } from "react";
import { LuArrowUp } from "react-icons/lu";

export const CircularProgressButton = () => {
  // Define a state variable to store the scroll position
  const [scrollPosition, setScrollPosition] = useState(0);
  // Define a function to calculate the scroll position as a percentage
  const getScrollPosition = () => {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scroll = `${totalScroll / windowHeight}`;
    return scroll;
  };
  // Add an event listener to update the scroll position on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(getScrollPosition());
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Calculate the strokeDashoffset based on the scroll position
  const strokeDashoffset = 251.2 - scrollPosition * 251.2;
  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ${
        scrollPosition == 0 && "opacity-0 translate-y-[20px]"
      }`}
    >
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <svg
          width="100"
          height="100"
          viewBox="-12.5 -12.5 125 125"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className="-rotate-90"
        >
          <circle
            r="40"
            cx="50"
            cy="50"
            fill="transparent"
            stroke={scrollPosition === 0 ? "#000000" : "#ffffff"}
            strokeWidth="5"
            strokeDasharray="251.20000000000002px"
            strokeDashoffset="0"
          ></circle>
          <circle
            r="40"
            cx="50"
            cy="50"
            stroke="#000000"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDashoffset={`${strokeDashoffset}`}
            fill="transparent"
            strokeDasharray="251.20000000000002px"
          ></circle>
          <LuArrowUp
            size={50}
            className="text-[#FF3158] rotate-90 translate-x-[75px] translate-y-[25px]"
          />
        </svg>
      </button>
    </div>
  );
};
