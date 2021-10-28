import { useContext } from "react";
import Form from "../components/Form";
import { AppContext } from "../store/app-contenxt";

function NewMeetup() {
  const meetupCtx = useContext(AppContext);
  function formSubmitHandler(formData) {
    meetupCtx.addMeetup(formData);
  }
  return (
    <div>
      <Form onFormSubmit={formSubmitHandler} />
    </div>
  );
}
export default NewMeetup;
