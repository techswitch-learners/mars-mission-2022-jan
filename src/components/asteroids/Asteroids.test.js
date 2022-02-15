import { render } from "@testing-library/react";
import { Asteroids } from "./Asteroids";

test("renders asteroid page", async () => {
  render(<Asteroids />);
});
