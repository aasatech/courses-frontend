import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ onPageChange, pageCount }) => {
  return (
    <ReactPaginate
      className="flex gap-6"
      breakLabel="..."
      nextLabel="next >"
      activeClassName="bg-black rounded-md px-3 py-[1px] text-white"
      onPageChange={onPageChange}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
