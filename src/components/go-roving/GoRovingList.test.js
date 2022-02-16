import { render, screen } from "@testing-library/react";
import { GoRovingList } from "./GoRovingList";
import { BrowserRouter } from "react-router-dom";

test("Go Roving list page renders without error", () => {
  let rovers = [
    {
      name: "Opportunity",
      link: "/go-roving/opportunity",
      img: "https://www.issnationallab.org/wp-content/uploads/2018/05/opportunity-rover-square.jpg",
    },
  ];
  render(
    <BrowserRouter>
      <GoRovingList rovers={rovers} />
    </BrowserRouter>
  );
});
