import React, { useState } from "react";
import clsx from "clsx";

export const Carousel = ({ activeIndex, prev, next, images }) => {

  return (
    <div className="w-full">
      <div className="relative w-full h-[530px] overflow-hidden rounded-lg">

        {images.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Carousel Item ${index + 1}`}
            className={clsx('absolute w-full h-full transition-opacity duration-700 object-cover ease-in-out', {
              'opacity-100': index === activeIndex,
              'opacity-0': index !== activeIndex
            })}

          />
        ))}

      </div>

      <div className="flex justify-start pt-10 pl-5">

        <button onClick={next} className=" cursor-pointer text-white hover:text-pink-700 font-bold pr-20 font-">
          Next
        </button>
        <button onClick={prev} className=" cursor-pointer text-white hover:text-pink-700 font-bold">
          Prev
        </button>

      </div>

    </div>
  );
}

