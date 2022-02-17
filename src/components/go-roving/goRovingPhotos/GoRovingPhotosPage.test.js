import { render, screen } from "@testing-library/react";
import { GoRovingPhotosPage } from "./GoRovingPhotosPage";
import { BrowserRouter } from "react-router-dom";

test("GoRovingPhotoPage renders without error", () => {
  render(
    <BrowserRouter>
      <GoRovingPhotosPage />
    </BrowserRouter>
  );
});
