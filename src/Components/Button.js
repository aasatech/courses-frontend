import React from "react";
import { RotatingLines } from "react-loader-spinner";

export const Button = ({ isloading = true, label, className, ...props }) => {
  return (
    <button
      {...props}
      className={`bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 border border-blue-700 rounded ${className}`}
    >
      {isloading ? (
        label
      ) : (
        <div className=" w-full flex justify-center ">
          <RotatingLines
            strokeColor="white"
            visible={true}
            height="20"
            width="20"
            color="white"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperclassName=""
          />
        </div>
      )}
    </button>
  );
};
