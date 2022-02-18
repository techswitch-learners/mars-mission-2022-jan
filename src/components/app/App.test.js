import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("web page renders without error", () => {
  render(<App />);
});

test("clicking on rover image takes you to the go roving page", () => {
  render(<App />);

  expect(screen.getByText(/Mars Mission/i)).toBeInTheDocument();

  const leftClick = { button: 0 };
  userEvent.click(screen.getByAltText("rover"), leftClick);

  expect(screen.getByText(/Spirit/i)).toBeInTheDocument();
  expect(screen.getByText(/Curiosity/i)).toBeInTheDocument();
  expect(screen.getByText(/Opportunity/i)).toBeInTheDocument();
});
