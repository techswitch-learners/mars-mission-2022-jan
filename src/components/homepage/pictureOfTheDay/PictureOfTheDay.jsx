import React, { useState, useEffect } from "react";
import { getPictureOfTheDay } from "../../../clients/potdClient";

export function PictureOfTheDay() {
  const [imageUrl, setImageUrl] = useState();
  const [imageTitle, setImageTitle] = useState();
  const [imageCaption, setImageCaption] = useState();

  useEffect(function () {
    getPictureOfTheDay().then((potd) => {
      setImageUrl(potd.url);
      setImageTitle(potd.title);
      setImageCaption(potd.explanation);
    });
  }, []);

  return (
    <section>
      <h1>NASA Astronomy Picture of the Day: {imageTitle}</h1>
      <img src={imageUrl} width="325" height="275"></img>
      <figcaption>{imageCaption}</figcaption>
    </section>
  );
}
