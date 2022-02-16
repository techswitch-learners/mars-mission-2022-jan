import { Link } from "react-router-dom";

export function GoRovingRover({ rover }) {
  return (
    <>
      <h2 className="rover-name">{rover.name}</h2>
      <Link to={rover.link}>
        <img
          className="rover-image"
          src={rover.img}
          alt={rover.name + "Rover"}
        />
      </Link>
    </>
  );
}
