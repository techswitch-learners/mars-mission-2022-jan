import "./homepage.scss";
import { PictureOfTheDay } from "./pictureOfTheDay/PictureOfTheDay";
import { InterestingFact } from "./interestingFact/InterestingFact";
import { PageLinks } from "./pageLinks/PageLinks";
import React from "react";

export const Homepage = () => {
  return (
    <main>
      <h1>Mars Mission</h1>
      <PictureOfTheDay />
      <InterestingFact />
      <PageLinks />
    </main>
  );
};
