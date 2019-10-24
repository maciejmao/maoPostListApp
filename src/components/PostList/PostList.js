import React from "react";
import { useSelector } from "react-redux";
import "./PostList.css";
import Notify from "../elements/Notify/Notify";
import Post from "./Post";

const PostList = () => {
  const { posts } = useSelector(state => state.postsData);
  return (
    <>
      {posts &&
        (posts.length !== 0 ? (
          <div className="App-postlist">
            {posts.map(item => (
              <Post key={item.id} {...item} />
            ))}
          </div>
        ) : (
          <Notify type="empty">
            Sorry, no results for this time, try again
          </Notify>
        ))}
    </>
  );
};

export default PostList;
