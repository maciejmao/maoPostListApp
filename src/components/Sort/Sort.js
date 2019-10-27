import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Sort.css";
import SortLink from "./SortLink";
import { setSort } from "../../slices/SortSlice";
import { sortTypes } from "../../selectors";

const Sort = () => {
  const dispatch = useDispatch();
  const changeSort = useCallback(payload => dispatch(setSort(payload)), [
    dispatch
  ]);
  const currentSort = useSelector(state => state.sort.type);
  const isReverseSort = useSelector(state => state.sort.isReverse);
  const props = {
    currentSort,
    isRev: isReverseSort
  };

  return (
    <div className="App-sort section">
      <div className="field has-addons">
        <h3 className="sort-label">Sort by: </h3>
        <SortLink changeSort={changeSort} type={sortTypes.TITLE} {...props} />
        <SortLink changeSort={changeSort} type={sortTypes.ID} {...props} />
        <SortLink changeSort={changeSort} type={sortTypes.FAVS} {...props} />
      </div>
    </div>
  );
};

export default Sort;
