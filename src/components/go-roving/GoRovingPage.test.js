import { render, screen } from "@testing-library/react";
import { GoRovingPage } from "./GoRovingPage";
import { BrowserRouter } from "react-router-dom";

test("Go Roving page renders without error", () => {
  render(
    <BrowserRouter>
      <GoRovingPage />
    </BrowserRouter>
  );
});

test("Go Roving page contains the heading opportunity", () => {
  render(
    <BrowserRouter>
      <GoRovingPage />
    </BrowserRouter>
  );
  const titleElements = screen.getAllByText(/opportunity/i);
  expect(titleElements[0]).toBeInTheDocument();
});
test("Go Roving page contains the heading curiosity", () => {
  render(
    <BrowserRouter>
      <GoRovingPage />
    </BrowserRouter>
  );
  const titleElements = screen.getAllByText(/curiosity/i);
  expect(titleElements[0]).toBeInTheDocument();
});
test("Go Roving page contains the heading spirit", () => {
  render(
    <BrowserRouter>
      <GoRovingPage />
    </BrowserRouter>
  );
  const titleElements = screen.getAllByText(/spirit/i);
  expect(titleElements[0]).toBeInTheDocument();
});
