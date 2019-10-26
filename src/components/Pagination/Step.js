import React from "react";
import "./Step.css";

const Step = ({ changePage, currentPage, page }) => {
  let btnClass = "button pagination-link";
  if (page === currentPage) {
    btnClass = btnClass.concat(" is-current");
  }
  return (
    <li>
      <button onClick={() => changePage(page)} className={btnClass}>
        {page}
      </button>
    </li>
  );
};

export default Step;
