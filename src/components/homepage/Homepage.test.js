import { render, screen } from "@testing-library/react";
import { Homepage } from "./Homepage";

test("homepage renders without error", () => {
  render(<Homepage />);
});

test("homepage contains the title", () => {
  render(<Homepage />);
  const titleElements = screen.getAllByText(/mars mission/i);
  expect(titleElements[0]).toBeInTheDocument();
});
