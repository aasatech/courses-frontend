import React, { useState } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({pageCount, onPageChange}) => {


  return (
    <div className="flex justify-center my-10">
      <ReactPaginate
        className="flex gap-6 "
        breakLabel="..."
        nextLabel="next >"
        onPageChange={onPageChange}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        activeClassName="bg-black rounded-md px-3 py-[1px] text-white"

      />
    </div>
  );
};

export default Pagination;
