import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { apiPostsRequest } from "../../slices/getPostsSlice";
import Header from "../Header/Header";
import Loader from "../elements/Loader/Loader";
import Notify from "../elements/Notify/Notify";
import PostList from "../PostList/PostList";

const App = () => {
  const { loading, error } = useSelector(state => state.postsData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiPostsRequest());
  }, [dispatch]);

  return (
    <div className="App section">
      <Header />
      <section className="section">
        <div className="container is-fluid">
          <PostList />

          {error && (
            <Notify type="error">Error, something went wrong! ({error})</Notify>
          )}

          {loading && <Loader />}
        </div>
      </section>
    </div>
  );
};

export default App;
