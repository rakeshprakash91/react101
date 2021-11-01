import { createAsyncThunk, createSlice } from "@reduxjs/toolkit/dist";

export const getTodosAsync = createAsyncThunk("getTodosAsync", async () => {
  const resp = await fetch("http://localhost:7000/todos");
  if (resp.ok) {
    const data = await resp.json();
    return data;
  }
});

export const addTodoAsync = createAsyncThunk(
  "addTodoAsync",
  async (payload) => {
    const resp = await fetch("http://localhost:7000/todos", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ title: payload.title })
    });

    if (resp.ok) {
      const data = await resp.json();
      return data;
    }
  }
);

export const deleteTodoAsync = createAsyncThunk(
  "deleteTodoAsync",
  async (payload) => {
    const resp = await fetch("http://localhost:7000/todos/" + payload.id, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      }
    });

    if (resp.ok) {
      const data = await resp.json();
      return data;
    }
  }
);

export const toggleCompletedAsync = createAsyncThunk(
  "toggleCompletedAsync",
  async (payload) => {
    const resp = await fetch("http://localhost:7000/todos/" + payload.id, {
      method: "PATCH",
      body: JSON.stringify({ completed: payload.completed }),
      headers: {
        "content-type": "application/json"
      }
    });

    if (resp.ok) {
      const data = await resp.json();
      return data;
    }
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
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
  },
  extraReducers: {
    [getTodosAsync.pending]: () => {
      console.log("this is where the loader comes in!");
    },
    [getTodosAsync.fulfilled]: (state, action) => {
      return action.payload;
    },
    [addTodoAsync.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [toggleCompletedAsync.fulfilled]: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    [deleteTodoAsync.fulfilled]: (state, action) => {
      return action.payload;
    }
  }
});

const todoReducer = todoSlice.reducer;
export default todoReducer;
