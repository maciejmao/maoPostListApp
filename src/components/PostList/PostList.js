import React from "react";
import { useSelector } from "react-redux";
import "./PostList.css";
import Loader from "../elements/Loader/Loader";
import Notify from "../elements/Notify/Notify";
import Post from "./Post";
import { paginatedSortedList } from "../../selectors";

const PostList = () => {
  const { loading, error, posts } = useSelector(state => state.postsData);

  const prepareItems = useSelector(paginatedSortedList);
  const currentPage = useSelector(state => state.pagination.currentPage);
  const prepareList = prepareItems ? prepareItems[currentPage - 1] : null;
  const postsResult = prepareList ? prepareList : posts;

  return (
    <>
      {postsResult &&
        (postsResult.length !== 0 ? (
          <div className="App-postlist">
            {postsResult.map(item => (
              <Post key={item.id} {...item} />
            ))}
          </div>
        ) : (
          <Notify type="empty">
            Sorry, no results for this time, try again
          </Notify>
        ))}

      {error && (
        <Notify type="error">Error, something went wrong! ({error})</Notify>
      )}

      {loading && <Loader />}
    </>
  );
};

export default PostList;
