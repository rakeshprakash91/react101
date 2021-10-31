import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0
};

const counterSlice = createSlice({
  name: "counters",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count += action.payload;
    },
    decrement: (state, action) => {
      state.count -= action.payload;
    }
  }
});
const counterReducer = counterSlice.reducer;

export const { increment, decrement } = counterSlice.actions;
export default counterReducer;
