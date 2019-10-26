import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  apiCommentsRequest,
  toggleComments,
  addComment,
  toggleFav
} from "../../slices/PostsSlice";
import "./Post.css";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

const Post = ({ id, title, body, commentsData = null, isFav }) => {
  const dispatch = useDispatch();

  const addNew = useCallback(payload => dispatch(addComment(payload)), [
    dispatch
  ]);

  const { comments, loading, error, isFetched, isOpen } = commentsData
    ? commentsData
    : "";

  const favStyleClass = isFav ? "App-post post-fav" : "App-post";

  return (
    <div className={favStyleClass}>
      <h3 className="post-title">{title}</h3>
      <p className="post-body">{body}</p>

      {isFetched ? (
        <button
          className="post-button button is-small"
          onClick={() => dispatch(toggleComments({ id }))}
        >
          {isOpen ? "Hide comments" : "Show comments"}
        </button>
      ) : (
        <button
          className="post-button button is-small"
          onClick={() => dispatch(apiCommentsRequest({ id }))}
        >
          Show comments
        </button>
      )}

      <button
        className="post-button button is-small"
        onClick={() => dispatch(toggleFav({ id }))}
      >
        {isFav ? "Remove from favs" : "Add to favs"}
      </button>

      <CommentList
        comments={comments}
        error={error}
        loading={loading}
        show={isOpen}
      />

      {isOpen && <CommentForm addNew={addNew} postId={id} />}
    </div>
  );
};

export default Post;
