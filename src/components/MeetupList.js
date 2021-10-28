import MeetupItem from "./MeetupItem";

function MeetupList(props) {
  const list = props.list;
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
