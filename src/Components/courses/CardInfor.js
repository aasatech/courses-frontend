"use client";
import React from "react";

const CardInfor = ({data=[], label, onChange}) => {
  // console.log
  return (
    <div>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="text-center font-bold "> {label} </div>
        <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <ul>
          {data?.map(({ name, id }, index) => {
            return (
              <li key={index}>
                <div className="toppings-list-item">
                  <div className="left-section">
                    <input className=" text-slate-500"
                      type="checkbox"
                      id={index}
                      name={name}
                      value={name}
                      onChange={(e)=>onChange(e, id)}
                      // checked={checkedState[index]}
                      // onChange={() => handleOnChange(index)}
                    />
                    <label
                      className="ml-2"
                      htmlFor={`custom-checkbox-${index}`}
                    >
                      {name}
                    </label>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CardInfor;
