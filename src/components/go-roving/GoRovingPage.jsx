import { Link } from "react-router-dom";
import react from "react";
import "./GoRovingPage.scss";

export const GoRovingPage = () => {
  return (
    <main>
      <h1>Go Roving!</h1>
      <h2 className="rover-name">Opportunity</h2>
      <Link to="/go-roving/opportunity">
        <img
          className="rover-image"
          src="https://www.issnationallab.org/wp-content/uploads/2018/05/opportunity-rover-square.jpg"
          alt="Opportunity Rover"
        />
      </Link>
      <h2 className="rover-name">Curiosity</h2>
      <Link to="/go-roving/curiosity">
        <img
          className="rover-image"
          src="https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/pia23378-16.jpg"
          alt="Curiosity Rover"
        />
      </Link>
      <h2 className="rover-name">Spirit</h2>
      <Link to="/go-roving/spirit">
        <img
          className="rover-image"
          src="http://searchoflife.com/wp-content/uploads/2014/06/mars-spirit-rover.jpg"
          alt="Spirit Rover"
        />
      </Link>
    </main>
  );
};
