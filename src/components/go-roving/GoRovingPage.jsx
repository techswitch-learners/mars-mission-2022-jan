import React from "react";
import "./GoRovingPage.scss";
import { GoRovingList } from "./GoRovingList.jsx";
import { setRoverData } from "./roverData/roverData";

export const GoRovingPage = () => {
  const rovers = setRoverData();
  return (
    <main>
      <h1>Go Roving!</h1>
      <GoRovingList rovers={rovers} />
    </main>
  );
};
