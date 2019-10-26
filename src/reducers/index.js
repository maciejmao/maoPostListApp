import { combineReducers } from "redux";
import PostsReducer from "../slices/PostsSlice";
import PaginationReducer from "../slices/PaginationSlice";

export default combineReducers({
  postsData: PostsReducer,
  pagination: PaginationReducer
});
