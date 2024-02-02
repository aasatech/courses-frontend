"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

const Dropdown = ({ data, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col items-center rounded-lg my-5">
      <button
        onClick={() => setIsOpen((pre) => !pre)}
        className={` ${
          isOpen ? "rounded-t-lg" : "rounded-lg"
        } bg-gray-200 p-4 w-full flex items-center justify-between font-bold text-blue-700 text-lg -tracking-wider border-2 border-transparent border-slate-300  `}
      >
        {label}
        
        <FontAwesomeIcon icon={!isOpen ? faCaretDown : faCaretUp} />
      </button>

      {isOpen && (
        <div className="bg-gray-100  flex flex-col items-start rounded-b-lg p-2 w-full transition-all duration-700 delay-500 ease-in-out ">
          {data.map((item, i) => (
            <div
              key={i}
              className="w-full hover:bg-gray-50 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4 "
            >
              <div className="text-lg font-bold p-4"> {item.name} </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
