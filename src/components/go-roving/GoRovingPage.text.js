import { render, screen } from "@testing-library/react";
import { GoRovingPage } from "./GoRovingPage";

test("Go Roving page renders without error", () => {
  render(<GoRovingPage />);
});

test("Go Roving page contains the heading opportunity", () => {
  render(<GoRovingPage />);
  const titleElements = screen.getAllByText(/opportunity/i);
  expect(titleElements[0]).toBeInTheDocument();
});
test("Go Roving page contains the heading curiosity", () => {
  render(<GoRovingPage />);
  const titleElements = screen.getAllByText(/curiosity/i);
  expect(titleElements[0]).toBeInTheDocument();
});
test("Go Roving page contains the heading spirit", () => {
  render(<GoRovingPage />);
  const titleElements = screen.getAllByText(/spirit/i);
  expect(titleElements[0]).toBeInTheDocument();
});
