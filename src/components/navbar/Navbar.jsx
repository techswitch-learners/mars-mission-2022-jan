import { Link } from "react-router-dom";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <nav>
      <Link className="logo" to="/">
        <img
          src="/mars-mission.png"
          alt="Mars Mission logo"
          width="50"
          height="50"
        />
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/go-roving">Go Roving!</Link>
        </li>
        <li>
          <Link to="/asteroids">Asteroids</Link>
        </li>
      </ul>
    </nav>
  );
};
