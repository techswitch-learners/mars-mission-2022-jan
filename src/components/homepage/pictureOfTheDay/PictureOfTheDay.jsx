import React, { useState, useEffect } from "react";
import { getPictureOfTheDay } from "../../../clients/potdClient";

export function PictureOfTheDay() {
  const [imageUrl, setImageUrl] = useState();

  useEffect(function () {
    async function fetchAndSetPotd() {
      setImageUrl(await getPictureOfTheDay());
    }
    fetchAndSetPotd();
  }, []);

  return (
    <section>
      <h1>NASA Astronomy Picture of the Day</h1>
      <img src={imageUrl}></img>
      <figcaption></figcaption>
    </section>
  );
}
