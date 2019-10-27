import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Pagination.css";
import Step from "./Step";
import { setPage } from "../../slices/PaginationSlice";
import { paginatedSortedList } from "../../selectors";

const Pagination = () => {
  const dispatch = useDispatch();
  const changePage = useCallback(payload => dispatch(setPage(payload)), [
    dispatch
  ]);

  const paginateItems = useSelector(paginatedSortedList);
  const currentPage = useSelector(state => state.pagination.currentPage);

  if (!paginateItems || paginateItems.length < 2) {
    return null;
  }

  return (
    <div className="App-pagination section">
      <nav className="pagination is-small" role="navigation">
        <ul className="pagination-list">
          {paginateItems.map((item, key) => {
            const props = {
              changePage,
              currentPage,
              item,
              page: key + 1
            };
            return <Step key={key} {...props} />;
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
