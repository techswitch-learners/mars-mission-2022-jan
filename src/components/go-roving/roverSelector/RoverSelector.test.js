import { render, screen } from "@testing-library/react";
import { RoverSelector } from "./RoverSelector";
import { BrowserRouter } from "react-router-dom";

test("Rover selector page renders without error", () => {
  const roverName = "Opportunity";
  render(
    <BrowserRouter>
      <RoverSelector roverName={roverName} />
    </BrowserRouter>
  );
});
