import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { PageLinks } from "./PageLinks";

test("Page links to go-roving and asteroids show on homepage", () => {
  render(
    <BrowserRouter>
      <PageLinks />
    </BrowserRouter>
  );
  const titleElements = screen.getAllByText(/Explore More/i);
  expect(titleElements[0]).toBeInTheDocument();
});
