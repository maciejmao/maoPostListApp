import { createSlice } from "redux-starter-kit";

// initial
const initialState = {
  search: {
    type: "TITLE",
    phrase: ""
  }
};

const Filters = createSlice({
  name: "Filters",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search.phrase = action.payload;
    },
    setSearchType: (state, action) => {
      state.search.type = action.payload;
    }
  }
});

export const { setSearch, setSearchType } = Filters.actions;

export default Filters.reducer;
