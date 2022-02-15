import React, { useEffect, useState } from "react";

export function GoRovingPhotoListPage() {
  const [photoList, setPhotoList] = useState();

  useEffect(function () {
    fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=DEMO_KEY`
    )
      .then((response) => response.json())
      .then((photoListJson) => setPhotoList(photoListJson.photos));
  }, []);

  let listPhotos;
  if (photoList !== undefined) {
    listPhotos = (
      <>
        <img src={photoList[0].img_src} />
      </>
    );
  } else {
    listPhotos = <p>Loading photos...</p>;
  }

  return (
    <main>
      <h1>GO ROVING PHOTO LIST PAGE </h1>
      {listPhotos}
    </main>
  );
}
