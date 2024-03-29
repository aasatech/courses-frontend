"use client";
import React from "react";

const CardInfor = ({ data = [], label, onChange, selectedIds }) => {
  return (
    <div>
      <div className="p-5 bg-white border border-gray-200 rounded-lg shadow">
        <div className="text-center font-bold "> {label} </div>
        <hr className="h-px my-4 bg-gray-200 border-0 "></hr>
        <ul>
          {data?.map(({ name, id }, index) => {
            return (
              <li key={index}>
                <div className="toppings-list-item">
                  <div>
                    <input
                      className=" text-slate-500"
                      type="checkbox"
                      id={`${label}-checkbox-${index}`}
                      name={name}
                      value={name}
                      checked={selectedIds.includes(id)}
                      onChange={(e) => onChange(e, id)}
                    />
                    <label
                      className="ml-2"
                      htmlFor={`${label}-checkbox-${index}`}
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
