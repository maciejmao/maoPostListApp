import React from "react";
import loader from "./logo.svg";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="App-wraploader">
      <img src={loader} className="App-loader" alt="loader" />
    </div>
  );
};

export default Loader;
