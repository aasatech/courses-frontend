import { Pagination } from "flowbite-react";
import React from "react";

const PaginationComponent = ({ onPageChange, pageCount, initialPage }) => {
  return (
    <Pagination
      currentPage={initialPage}
      totalPages={pageCount}
      onPageChange={onPageChange}
    />
  );
};

export default PaginationComponent;