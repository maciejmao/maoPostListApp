import { createSlice } from "redux-starter-kit";

// initial
const initialState = {
  type: "NONE",
  isReverse: false
};

const Sort = createSlice({
  name: "Sort",
  initialState,
  reducers: {
    setSort: (state, action) => {
      state.type = action.payload.type;
      state.isReverse = action.payload.isRev;
    }
  }
});

export const { setSort } = Sort.actions;

export default Sort.reducer;
