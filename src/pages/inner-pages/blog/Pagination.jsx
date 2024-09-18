import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (pageNumber) => {
    onPageChange(pageNumber);
  };

  console.log("✌️currentPage --->", currentPage);

  // Calculate the range of pages to display
  const pages = [];
  const startPage = Math.max(1, currentPage - 1);
  const endPage = Math.min(totalPages, currentPage + 1);

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  // If there's space before the first page, add it
  if (startPage > 1) {
    pages.unshift(1);
    if (startPage > 2) {
      pages.splice(1, 0, '...'); // Add ellipsis if there's a gap
    }
  }

  // If there's space after the last page, add it
  if (endPage < totalPages) {
    pages.push('...');
    pages.push(totalPages);
  }

  return (
    <ul className="pagination d-flex align-items-center style-none">
      <li className="arrow">
        <button
          type="button"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <i className="bi bi-arrow-left"></i>
        </button>
      </li>
      {pages.map((page, index) => (
        <li key={index} className={page === currentPage ? "active" : ""}>
          {typeof page === 'number' ? (
            <button type="button" onClick={() => handlePageChange(page)}>
              {page}
            </button>
          ) : (
            <span>{page}</span> // Render ellipsis as plain text
          )}
        </li>
      ))}
      <li className="arrow">
        <button
          type="button"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <i className="bi bi-arrow-right"></i>
        </button>
      </li>
    </ul>
  );
};

export default Pagination;