import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodosAsync } from "../redux/todoSlice";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);

  const todos = useSelector((state) => {
    return state.todos;
  });
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </ul>
  );
};

export default TodoList;
