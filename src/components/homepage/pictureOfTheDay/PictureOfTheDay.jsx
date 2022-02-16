import React, { useState, useEffect } from "react";
import { getPotdData } from "../../../clients/potdClient";

export function PictureOfTheDay() {
  const [imageUrl, setImageUrl] = useState();
  const [imageTitle, setImageTitle] = useState();
  const [imageCaption, setImageCaption] = useState();

  useEffect(function () {
    getPotdData().then((potd) => {
      setImageUrl(potd.url);
      setImageTitle(potd.title);
      setImageCaption(potd.explanation);
    });
  }, []);

  return (
    <section>
      <h1>NASA Astronomy Picture of the Day: {imageTitle}</h1>
      <img src={imageUrl}></img>
      <figcaption>{imageCaption}</figcaption>
    </section>
  );
}