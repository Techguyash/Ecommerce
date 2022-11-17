import React from "react";

const Pagination = () => {
  return (
    <div className="paginate dflex justify-content-between align-items-center">
      <i className="paginate__icon fas fa-angle-left"></i>
      <i className="paginate__icon fas fa-angle-double-left"></i>
      <p className="paginate__text">Page 1 of 1</p>
      <i className="paginate__icon fas fa-angle-double-right"></i>
      <i className="paginate__icon fas fa-angle-right"></i>
    </div>
  );
};

export default Pagination;
