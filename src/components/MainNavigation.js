import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import css from "./MainNavigation.module.css";
function MainNavigation() {
  const count = useSelector((state) => state.meetups.favoritesCount);
  return (
    <header className={css.header}>
      <div className={css.logo}>React Meetup</div>
      <ul>
        <li>
          <Link to="/">All Meetups</Link>
        </li>
        <li>
          <Link to="/new-meetup">New Meetup</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites {count}</Link>
        </li>
      </ul>
    </header>
  );
}
export default MainNavigation;
