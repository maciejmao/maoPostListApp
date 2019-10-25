import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { apiPostsRequest } from "../../slices/PostsSlice";
import Header from "../Header/Header";
import PostList from "../PostList/PostList";

const App = () => {
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
        </div>
      </section>
    </div>
  );
};

export default App;
