import { createSlice, createSelector } from "redux-starter-kit";

const POSTS_PER_PAGE = 6;

// selectors
const getItems = state => state.postsData.posts;

export const paginateList = createSelector(
  [getItems],
  items => {
    if (!items) return null;

    return items.reduce((memo, item, i) => {
      if (i % POSTS_PER_PAGE) {
        memo[memo.length - 1].push(item);
      } else {
        memo[memo.length] = [item];
      }
      return memo;
    }, []);
  }
);

// initial
const initialState = {
  currentPage: 1
};

const Pagination = createSlice({
  name: "Pagination",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    }
  }
});

export const { setPage } = Pagination.actions;

export default Pagination.reducer;
