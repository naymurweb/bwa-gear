import React from "react";

const Pagination = ({ dataParPage, totalData, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalData / dataParPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="text-center">
      {pageNumbers.map((number) => (
        <button
          className="bg-primaryDark px-4 py-2 mx-4 text-white"
          onClick={() => paginate(number)}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
