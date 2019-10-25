import React from "react";
import { useDispatch } from "react-redux";
import { apiCommentsRequest, toggleComments } from "../../slices/PostsSlice";
import "./Post.css";
import CommentList from "./CommentList";

const Post = ({ id, title, body, commentsData = null }) => {
  const dispatch = useDispatch();

  const { comments, loading, error, isFetched, isOpen } = commentsData
    ? commentsData
    : "";

  return (
    <div className="App-post">
      <h3 className="post-title">{title}</h3>
      <p className="post-body">{body}</p>

      {isFetched ? (
        <button
          className="post-button button is-small"
          onClick={() => dispatch(toggleComments({ id }))}
        >
          {isOpen ? "Hide comments" : "Show commments"}
        </button>
      ) : (
        <button
          className="post-button button is-small"
          onClick={() => dispatch(apiCommentsRequest({ id }))}
        >
          Show comments
        </button>
      )}

      <CommentList
        comments={comments}
        error={error}
        loading={loading}
        show={isOpen}
      />
    </div>
  );
};

export default Post;
