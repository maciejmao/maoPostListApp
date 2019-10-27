import { combineReducers } from "redux";
import PostsReducer from "../slices/PostsSlice";
import PaginationReducer from "../slices/PaginationSlice";
import SortReducer from "../slices/SortSlice";

export default combineReducers({
  postsData: PostsReducer,
  pagination: PaginationReducer,
  sort: SortReducer
});
