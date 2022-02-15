import { Link } from "react-router-dom";
import react from "react";

export const GoRovingPage = () => {
  return (
    <main>
      <h1>Go Roving!</h1>
      <Link to="/go-roving/curiosity">
        <h2>Curiosity</h2>
      </Link>
      <Link to="/go-roving/opportunity">
        <h2>Opportunity</h2>
      </Link>
      <Link to="/go-roving/spirit">
        <h2>Spirit</h2>
      </Link>
    </main>
  );
};
