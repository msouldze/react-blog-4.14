import { useState } from "react";

const Pagination = ({ articlesPerPage, length, currentPage, handlePagination }) => {
  const [activePage, setActivePage] = useState(1);
  const paginationNumbers = [];

  for (let i = 1; i <= Math.ceil(length / articlesPerPage); i++) {
    paginationNumbers.push(i);
  }

  function handleClick(pageNumber) {
    setActivePage(pageNumber);
    handlePagination(pageNumber)
  }

  return (
    <div className='pagination'>
      <button
        className="arrow back"
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
      ></button>
      {paginationNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          className={activePage ===  pageNumber ? 'active-page' : ''}
          onClick={() => handleClick(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
      <button
        className="arrow forward"
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === paginationNumbers[paginationNumbers.length - 1]}
      ></button>
    </div>
  );
};

export default Pagination;