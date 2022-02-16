import { render, screen } from "@testing-library/react";
import { GoRovingRover } from "./GoRovingRover";
import { BrowserRouter } from "react-router-dom";

test("Go Roving rover renders without error", () => {
  let rover = {
    name: "Opportunity",
    link: "/go-roving/opportunity",
    img: "https://www.issnationallab.org/wp-content/uploads/2018/05/opportunity-rover-square.jpg",
  };
  render(
    <BrowserRouter>
      <GoRovingRover rover={rover} />
    </BrowserRouter>
  );
});

test("Go Roving page contains the heading opportunity", () => {
  let rover = {
    name: "Opportunity",
    link: "/go-roving/opportunity",
    img: "https://www.issnationallab.org/wp-content/uploads/2018/05/opportunity-rover-square.jpg",
  };
  render(
    <BrowserRouter>
      <GoRovingRover rover={rover} />
    </BrowserRouter>
  );
  const titleElements = screen.getAllByText(/opportunity/i);
  expect(titleElements[0]).toBeInTheDocument();
});
test("Go Roving page contains the heading curiosity", () => {
  let rover = {
    name: "Curiosity",
    link: "/go-roving/curiosity",
    img: "https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/pia23378-16.jpg",
  };
  render(
    <BrowserRouter>
      <GoRovingRover rover={rover} />
    </BrowserRouter>
  );
  const titleElements = screen.getAllByText(/curiosity/i);
  expect(titleElements[0]).toBeInTheDocument();
});
test("Go Roving page contains the heading spirit", () => {
  let rover = {
    name: "Spirit",
    link: "/go-roving/spirit",
    img: "http://searchoflife.com/wp-content/uploads/2014/06/mars-spirit-rover.jpg",
  };
  render(
    <BrowserRouter>
      <GoRovingRover rover={rover} />
    </BrowserRouter>
  );
  const titleElements = screen.getAllByText(/spirit/i);
  expect(titleElements[0]).toBeInTheDocument();
});
