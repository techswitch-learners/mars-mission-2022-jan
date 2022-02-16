import { render, screen } from "@testing-library/react";
import { Homepage } from "../Homepage";
import { PictureOfTheDay } from "./PictureOfTheDay";

test("picture of the day renders without error", () => {
  render(<PictureOfTheDay />);
});

test("picture of the day shows title", () => {
  render(<PictureOfTheDay />);
  const titleElements = screen.getAllByText(
    /NASA Astronomy Picture of the Day:/i
  );
  expect(titleElements[0]).toBeInTheDocument();
});
