import React from "react";
import "./Comment.css";

const Comment = ({ name, email, body }) => {
  return (
    <div className="App-comment">
      <p className="comment-name">{name}</p>
      <p className="comment-email">{email}</p>
      <p className="comment-body">{body}</p>
    </div>
  );
};

export default Comment;
