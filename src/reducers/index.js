import { combineReducers } from "redux";
import getPostsReducer from "../slices/getPostsSlice";

export default combineReducers({
  postsData: getPostsReducer
});
