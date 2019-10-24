import React from "react";
import "./Post.css";

const Post = ({ id, title, body }) => {
  const onShowComments = id => {
    console.log(id);
  };

  return (
    <div className="App-post">
      <h3 className="post-title">{title}</h3>
      <p className="post-body">{body}</p>
      <button
        className="post-button button is-small"
        onClick={() => onShowComments(id)}
      >
        Show comments
      </button>
    </div>
  );
};

export default Post;
