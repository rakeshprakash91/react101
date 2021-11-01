import { useSelector } from "react-redux";
import MeetupItem from "./MeetupItem";

function MeetupList() {
  const list = useSelector((state) => {
    return state.meetups.meetupList;
  });
  return (
    <div>
      <ul>
        {list.map((item, index) => {
          return <MeetupItem key={index} item={item} />;
        })}
      </ul>
    </div>
  );
}
export default MeetupList;
