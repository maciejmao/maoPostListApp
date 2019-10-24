import React from "react";
import "./Notify.css";

const Notify = ({ type, children }) => {
  const typeClass =
    type === "empty" ? "is-info" : type === "error" ? "is-danger" : "";
  return (
    <div className={typeClass.concat(" App-notify notification")}>
      {children}
    </div>
  );
};

export default Notify;
