import { takeEvery } from "redux-saga/effects";
import getPosts from "./getPostsSaga";
import { apiPostsRequest } from "../slices/getPostsSlice";

export default function* rootSaga() {
  yield takeEvery(apiPostsRequest, getPosts);
}
