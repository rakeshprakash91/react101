import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodoAsync, toggleCompletedAsync } from "../redux/todoSlice";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  function changeHandler() {
    dispatch(
      toggleCompletedAsync({
        id: id,
        completed: !completed
      })
    );
  }

  function clickHandler() {
    dispatch(
      deleteTodoAsync({
        id: id
      })
    );
  }

  return (
    <li className={`list-group-item ${completed && "list-group-item-success"}`}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input
            type="checkbox"
            className="mr-3"
            onChange={changeHandler}
            checked={completed}
          ></input>
          {title}
        </span>
        <button className="btn btn-danger" onClick={clickHandler}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
