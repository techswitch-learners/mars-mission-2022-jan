import React, { useState, useEffect } from "react";

export function PictureOfTheDay() {
  const [imageUrl, setImageUrl] = useState();

  useEffect(function () {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=Q90aHog1z4Q1J3wkJTjlS3u0fiGDC8TLzO0cNsNe`
    )
      .then((response) => response.json())
      .then((apodJson) => setImageUrl(apodJson.url));
  }, []);

  return (
    <section>
      <h1>NASA Astronomy Picture of the Day</h1>
      <img src={imageUrl}></img>
      <figcaption></figcaption>
    </section>
  );
}
