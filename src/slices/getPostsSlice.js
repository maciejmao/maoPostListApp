import { createSlice } from "redux-starter-kit";

const initialState = {
  loading: false,
  posts: null,
  error: null
};

const getPosts = createSlice({
  name: "getPosts",
  initialState,
  reducers: {
    apiPostsRequest: state => ({ ...state, loading: true, error: null }),
    apiPostsSuccess: (state, action) => ({
      ...state,
      loading: false,
      posts: action.payload
    }),
    apiPostsFailure: (state, action) => ({
      ...state,
      loading: false,
      posts: null,
      error: action.payload
    })
  }
});

export const {
  apiPostsRequest,
  apiPostsSuccess,
  apiPostsFailure
} = getPosts.actions;

export default getPosts.reducer;
