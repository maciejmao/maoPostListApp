import { createSlice } from "redux-starter-kit";

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
