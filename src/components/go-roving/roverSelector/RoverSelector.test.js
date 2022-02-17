import { render, screen } from "@testing-library/react";
import { RoverSelector } from "./RoverSelector";
import { BrowserRouter } from "react-router-dom";
import { setRoverData } from "../roverData/roverData";

test("Rover selector page renders without error", () => {
  let rovers = [
    {
      name: "Opportunity",
      link: "/go-roving/opportunity",
      img: "https://www.issnationallab.org/wp-content/uploads/2018/05/opportunity-rover-square.jpg",
    },
  ];
  render(
    <BrowserRouter>
      <RoverSelector roverName={"opportunity"} />
    </BrowserRouter>
  );
});
