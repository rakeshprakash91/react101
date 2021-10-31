import { createSlice } from "@reduxjs/toolkit/dist";

const InitialState = [
  {
    id: 1,
    title: "Todo1",
    completed: false
  },
  {
    id: 2,
    title: "Todo2",
    completed: false
  },
  {
    id: 3,
    title: "Todo3",
    completed: true
  }
];

const todoSlice = createSlice({
  name: "todos",
  initialState: InitialState,
  reducers: {
    addTodo: (state, action) => {
      const { title } = action.payload;
      const data = {
        id: Date.now(),
        title,
        completed: false
      };
      state.push(data);
    },
    toggleComplete: (state, action) => {
      state.map((item) => {
        return item.id === action.payload.id ? (item.completed = true) : item;
      });
    }
  }
});

const todoReducer = todoSlice.reducer;
export const { addTodo } = todoSlice.actions;
export default todoReducer;
