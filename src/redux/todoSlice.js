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
    completed: false
  },
  {
    id: 4,
    title: "todo4",
    completed: false
  },
  {
    id: 5,
    title: "todo5",
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
        return item.id === action.payload.id
          ? (item.completed = !item.completed)
          : item;
      });
    },
    deleteTodos: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    }
  }
});

const todoReducer = todoSlice.reducer;
export const { addTodo, toggleComplete, deleteTodos } = todoSlice.actions;
export default todoReducer;
