import { render, screen } from "@testing-library/react";
import { InterestingFact } from "./InterestingFact";

test("interesting fact renders without error", () => {
  render(<InterestingFact />);
});

test("interesting fact shows did you know", () => {
  render(<InterestingFact />);
  const titleElements = screen.getAllByText(/Did you know/i);
  expect(titleElements[0]).toBeInTheDocument();
});
