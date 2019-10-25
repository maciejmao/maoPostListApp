import React from "react";
import "./CommentList.css";
import Comment from "./Comment";
import Loader from "../elements/Loader/Loader";
import Notify from "../elements/Notify/Notify";

const CommentList = ({ comments, error, loading, show }) => {
  return (
    <>
      {comments &&
        (comments.length !== 0 ? (
          show && (
            <div className="App-commentlist section">
              {comments.map(item => (
                <Comment key={item.id} {...item} />
              ))}
            </div>
          )
        ) : (
          <Notify type="empty">Sorry, no comments yet</Notify>
        ))}

      {error && (
        <Notify type="error">Error, something went wrong! ({error})</Notify>
      )}

      {loading && <Loader />}
    </>
  );
};

export default CommentList;
