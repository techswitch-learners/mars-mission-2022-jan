import React, { useState, useEffect } from "react";
import { getPotdData } from "../../../clients/potdClient";
import ReactPlayer from "react-player/youtube";

export function PictureOfTheDay() {
  const [imageUrl, setImageUrl] = useState();
  const [imageTitle, setImageTitle] = useState();
  const [imageCaption, setImageCaption] = useState();
  const [imageType, setImageType] = useState();

  useEffect(function () {
    getPotdData().then((potd) => {
      setImageUrl(potd.url);
      setImageTitle(potd.title);
      setImageCaption(potd.explanation);
      setImageType(potd.media_type);
    });
  }, []);

  return (
    <section>
      <h1>NASA Astronomy Picture of the Day: {imageTitle}</h1>

      {imageType === "video" && (
        <p>
          <ReactPlayer url={imageUrl} />
        </p>
      )}

      {imageType === "image" && <img src={imageUrl}></img>}

      <figcaption>{imageCaption}</figcaption>
    </section>
  );
}
