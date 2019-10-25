import axios from "axios";
import { call, put } from "redux-saga/effects";
import { apiCommentsSuccess, apiCommentsFailure } from "../slices/PostsSlice";

//api mockup
//import mockupData from "../api/comments.json";
//const mockup = true;

export default function* getComments(action) {
  try {
    const response = yield call(getCommentsData, action.payload.id);
    const respdata = response.data || response;
    yield put(
      apiCommentsSuccess({ id: action.payload.id, comments: respdata })
    );
  } catch (error) {
    const err = error.message || true;
    yield put(apiCommentsFailure({ id: action.payload.id, error: err }));
  }
}

function getCommentsData(id) {
  //if (mockup && mockupData) return mockupData;

  return axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/comments?postId=" + id
  });
}
