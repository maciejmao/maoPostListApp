import axios from "axios";
import { call, put } from "redux-saga/effects";
import { apiPostsSuccess, apiPostsFailure } from "../slices/PostsSlice";

//api mockup
//import mockupData from "../api/posts.json";
//const mockup = true;

export default function* getPosts() {
  try {
    const response = yield call(getPostsData);
    const respdata = response.data || response;
    yield put(apiPostsSuccess(respdata));
  } catch (error) {
    const err = error.message || true;
    yield put(apiPostsFailure(err));
  }
}

function getPostsData() {
  //if (mockup && mockupData) return mockupData;

  return axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/posts"
  });
}
