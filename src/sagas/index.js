import { takeEvery } from "redux-saga/effects";
import getPosts from "./getPostsSaga";
import getComments from "./getCommentsSaga";
import { apiPostsRequest } from "../slices/PostsSlice";
import { apiCommentsRequest } from "../slices/PostsSlice";

export default function* rootSaga() {
  yield takeEvery(apiPostsRequest, getPosts);
  yield takeEvery(apiCommentsRequest, getComments);
}
