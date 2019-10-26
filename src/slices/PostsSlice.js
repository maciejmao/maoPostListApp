import { createSlice } from "redux-starter-kit";

// selectors
const getPostObj = (state, postId) =>
  state.posts.find(item => item.id === postId);

// initial
const initialState = {
  loading: false,
  posts: null,
  error: null
};

const Posts = createSlice({
  name: "Posts",
  initialState,
  reducers: {
    apiPostsRequest: state => ({ ...state, loading: true, error: null }),
    apiPostsSuccess: (state, action) => {
      const postData = action.payload.map(obj => ({ ...obj, isFav: false }));
      const dataObj = {
        ...state,
        loading: false,
        posts: postData
      };
      return dataObj;
    },
    apiPostsFailure: (state, action) => ({
      ...state,
      loading: false,
      posts: null,
      error: action.payload
    }),
    apiCommentsRequest: (state, action) => {
      const post = getPostObj(state, action.payload.id);
      const comments = {
        commentsData: {
          loading: true,
          comments: null,
          error: null,
          isFetched: false,
          isOpen: false
        }
      };
      if (post) Object.assign(post, comments);
    },
    apiCommentsSuccess: (state, action) => {
      const post = getPostObj(state, action.payload.id);
      const comments = {
        commentsData: {
          loading: false,
          comments: action.payload.comments,
          error: null,
          isFetched: true,
          isOpen: true
        }
      };
      if (post) Object.assign(post, comments);
    },
    apiCommentsFailure: (state, action) => {
      const post = getPostObj(state, action.payload.id);
      const comments = {
        commentsData: {
          loading: false,
          comments: null,
          error: action.payload.error,
          isFetched: false,
          isOpen: false
        }
      };
      if (post) Object.assign(post, comments);
    },
    toggleComments: (state, action) => {
      const post = getPostObj(state, action.payload.id);
      if (post) {
        const comments = {
          commentsData: {
            ...post.commentsData,
            isOpen: !post.commentsData.isOpen
          }
        };
        Object.assign(post, comments);
      }
    },
    addComment: (state, action) => {
      const post = getPostObj(state, action.payload.postId);
      const comment = {
        postId: action.payload.postId,
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        body: action.payload.body
      };
      if (post) post.commentsData.comments.push(comment);
    },
    toggleFav: (state, action) => {
      const post = getPostObj(state, action.payload.id);
      if (post) post.isFav = !post.isFav;
    }
  }
});

export const {
  apiPostsRequest,
  apiPostsSuccess,
  apiPostsFailure,
  apiCommentsRequest,
  apiCommentsSuccess,
  apiCommentsFailure,
  toggleComments,
  addComment,
  toggleFav
} = Posts.actions;

export default Posts.reducer;
