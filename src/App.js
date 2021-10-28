import { Route } from "react-router-dom";
import "./App.css";
import MainNavigation from "./components/MainNavigation";
import AllMeetups from "./pages/AllMeetups";
import Favorite from "./pages/Favorite";
import NewMeetup from "./pages/NewMeetup";
function App() {
  return (
    <div className="App">
      <MainNavigation />
      <Route path="/" exact>
        <AllMeetups />
      </Route>
      <Route path="/new-meetup">
        <NewMeetup />
      </Route>
      <Route path="/favorites">
        <Favorite />
      </Route>
    </div>
  );
}

export default App;
/*
 */
