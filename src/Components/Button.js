import React from "react";

export const Button = ({ label, className, ...props }) => {
  return (
    <button
      {...props}
      className={`bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 border border-blue-700 rounded ${className}`}>
      {label}
    </button>
  );
};
