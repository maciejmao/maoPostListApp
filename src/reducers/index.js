import { combineReducers } from "redux";
import PostsReducer from "../slices/PostsSlice";

export default combineReducers({
  postsData: PostsReducer
});
