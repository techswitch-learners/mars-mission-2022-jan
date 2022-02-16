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
