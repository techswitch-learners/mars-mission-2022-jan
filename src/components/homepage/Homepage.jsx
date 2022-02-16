import { PictureOfTheDay } from "./pictureOfTheDay/PictureOfTheDay";
import { InterestingFact } from "./interestingFacts/InterestingFacts";
import React from "react";

export const Homepage = () => {
  return (
    <main>
      <h1>Mars Mission</h1>
      <PictureOfTheDay />
      <InterestingFact />
    </main>
  );
};
