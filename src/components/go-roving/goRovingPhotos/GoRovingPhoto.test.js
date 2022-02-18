import { render, screen } from "@testing-library/react";
import { GoRovingPhoto } from "./GoRovingPhoto";

test("Camera full name is correct", () => {
  const photo = {
    img_src: "some image url",
    camera: { full_name: "some camera" },
  };

  render(<GoRovingPhoto photo={photo} />);
  const element = screen.getByText(/some camera/);

  expect(element).toBeInTheDocument();
});

test("Image is correct", () => {
  const photo = {
    img_src: "some image url",
    camera: { name: "some camera" },
  };

  render(<GoRovingPhoto photo={photo} />);
  const element = screen.getByRole("img");

  expect(element).toBeInTheDocument();
});

test("Image alt is correct", () => {
  const photo = {
    img_src: "some image url",
    camera: { name: "some camera" },
  };

  render(<GoRovingPhoto photo={photo} />);
  const element = screen.getByRole("img", "From Rover");

  expect(element).toBeInTheDocument();
});
