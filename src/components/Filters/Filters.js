import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Filters.css";
import Search from "./Search";
import { setSearch, setSearchType } from "../../slices/FilterSlice";

const Filters = () => {
  const dispatch = useDispatch();

  const changeSearch = useCallback(payload => dispatch(setSearch(payload)), [
    dispatch
  ]);
  const changeSearchType = useCallback(
    payload => dispatch(setSearchType(payload)),
    [dispatch]
  );
  const currentPhrase = useSelector(state => state.filters.search.phrase);
  const currentSearchType = useSelector(state => state.filters.search.type);

  const props = {
    phrase: currentPhrase,
    type: currentSearchType
  };

  return (
    <div className="App-filters section">
      <div className="field has-addons">
        <h3 className="filters-label">Filters: </h3>
        <Search
          changeSearch={changeSearch}
          changeSearchType={changeSearchType}
          {...props}
        />
      </div>
    </div>
  );
};

export default Filters;
