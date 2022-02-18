import React from "react";
import "./GoRovingPage.scss";
import { GoRovingList } from "./GoRovingList.jsx";
import { rovers } from "./roverData/roverData";

export const GoRovingPage = () => {
  return (
    <main>
      <h1>Go Roving!</h1>
      <GoRovingList rovers={rovers} />
    </main>
  );
};
