import React from "react";

const Pagination = () => {
  return (
    <div className="d-flex justify-content-between align-items-center gap-2 text-secondary">
      <div>
        <span className="mx-2">
          <i className="ri-arrow-left-line fs-5"></i>
        </span>{" "}
        Previous
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item active">
            <a className="page-link" href="/">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/">
              3
            </a>
          </li>
        </ul>
      </nav>
      <div>
        Next{" "}
        <span className="mx-2">
          <i className="ri-arrow-right-line fs-5"></i>
        </span>
      </div>
    </div>
  );
};

export default Pagination;
