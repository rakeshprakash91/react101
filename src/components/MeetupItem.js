import { useDispatch } from "react-redux";
import { toggleFav } from "../feature/meetupSlice";
import Card from "./Card";
import css from "./MeetupItem.module.css";
function MeetupItem(props) {
  const dispatch = useDispatch();
  const { id, title, image, address, description } = props.item;
  function favHandler() {
    dispatch(toggleFav({ id: id }));
  }
  return (
    <Card>
      <div className={css.item}>
        <div className={css.image}>
          <img src={image} alt="meetup" />
        </div>
        <div className={css.content}>
          <h3>{title}</h3>
          <h4>Address:</h4>
          <label>{address}</label>
          <h4>Description:</h4>
          <label>{description}</label>
        </div>
        <div className={css.actions}>
          <button className={css.btn} onClick={favHandler}>
            Favorites
          </button>
        </div>
      </div>
    </Card>
  );
}
export default MeetupItem;
