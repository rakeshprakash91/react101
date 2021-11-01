import { useContext } from "react";
import MeetupList from "../components/MeetupList";
import { AppContext } from "../store/app-context";

function AllMeetups() {
  const meetupCtx = useContext(AppContext);
  return (
    <div>
      <h2>All meetups</h2>
      <MeetupList list={meetupCtx.meetups} />
    </div>
  );
}
export default AllMeetups;
