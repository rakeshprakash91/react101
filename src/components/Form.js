import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addMeetup } from "../feature/meetupSlice";
import Card from "./Card";
import css from "./NewMeetupForm.module.css";
function Form() {
  const titleRef = useRef();
  const addressRef = useRef();
  const urlRef = useRef();
  const descRef = useRef();
  const history = useHistory();
  const dispatch = useDispatch();

  function submitHandler(event) {
    event.preventDefault();
    const data = {};
    [titleRef, addressRef, urlRef, descRef].forEach((item) => {
      data[item.current.id] = item.current.value;
    });
    data.id = Date.now();
    dispatch(addMeetup(data));
    history.replace("/");
  }
  return (
    <Card>
      <div>
        <form className={css.form} onSubmit={submitHandler}>
          <h2>New Meetup Form</h2>
          <div className={css.control}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" ref={titleRef} required />
          </div>
          <div className={css.control}>
            <label htmlFor="address">Address</label>
            <input type="address" id="address" ref={addressRef} required />
          </div>
          <div className={css.control}>
            <label htmlFor="image">Image</label>
            <input type="url" id="image" ref={urlRef} required />
          </div>
          <div className={css.control}>
            <label htmlFor="description">Description</label>
            <textarea id="description" ref={descRef} required />
          </div>
          <div className={css.actions}>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </Card>
  );
}

export default Form;
