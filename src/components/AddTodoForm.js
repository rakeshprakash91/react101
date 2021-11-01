import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodoAsync } from "../redux/todoSlice";
const AddTodoForm = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodoAsync({ title: inputRef.current.value }));
    inputRef.current.value = "";
  };

  return (
    <form onSubmit={onSubmit} className="form-inline mt-3 mb-3">
      <label className="sr-only">Name</label>
      <input
        required
        type="text"
        ref={inputRef}
        className="form-control mb-2 mr-sm-2"
        placeholder="Add todo..."
      ></input>

      <button type="submit" className="btn btn-primary mb-2">
        Submit
      </button>
    </form>
  );
};

export default AddTodoForm;
