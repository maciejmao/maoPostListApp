import React from "react";
import "./Search.css";
import { searchTypes } from "../../selectors";

const Search = ({ phrase, type, changeSearch, changeSearchType }) => {
  return (
    <div className="field has-addons">
      <p className="control">
        <input
          className="input is-small"
          type="text"
          name="phrase"
          placeholder="Search phrase ..."
          onChange={e => changeSearch(e.target.value.trim())}
          value={phrase || ""}
        />
      </p>
      <p className="control">
        <span className="select is-small">
          <select onChange={e => changeSearchType(e.target.value)} value={type}>
            {Object.keys(searchTypes).map(t => (
              <option key={t} value={searchTypes[t]}>
                by {searchTypes[t].replace(/_/gi, " ")}
              </option>
            ))}
          </select>
        </span>
      </p>
    </div>
  );
};

export default Search;
