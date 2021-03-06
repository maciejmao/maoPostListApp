import React from "react";
import "./SortLink.css";

const SortLink = ({ changeSort, type, currentSort, isRev }) => {
  let sortStyleClass = "";
  if (type === currentSort) {
    isRev = !isRev;
    sortStyleClass = isRev ? "fa fa-arrow-down" : "fa fa-arrow-up";
  } else {
    isRev = false;
  }

  return (
    <p className="control">
      <button
        onClick={() => changeSort({ type, isRev })}
        className="button is-outlined is-small"
      >
        <span>{type}</span>

        {type !== "NONE" && (
          <span className="icon is-small">
            <i className={sortStyleClass}></i>
          </span>
        )}
      </button>
    </p>
  );
};

export default SortLink;
