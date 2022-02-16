import React, { useState, useEffect } from "react";
import { getPotdData } from "../../../clients/potdClient";
import ReactPlayer from "react-player/youtube";

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
      <p>
        <ReactPlayer url="https://www.youtube.com/embed/liapnqj9GDc?rel=0" />
      </p>
      <figcaption>{imageCaption}</figcaption>
    </section>
  );
}
