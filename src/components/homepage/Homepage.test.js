import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Homepage } from "./Homepage";

test("homepage renders without error", () => {
  render(
    <BrowserRouter>
      <Homepage />
    </BrowserRouter>
  );
});

test("homepage contains the title", () => {
  render(
    <BrowserRouter>
      <Homepage />
    </BrowserRouter>
  );
  const titleElements = screen.getAllByText(/mars mission/i);
  expect(titleElements[0]).toBeInTheDocument();
});
