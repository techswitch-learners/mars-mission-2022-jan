import React, { useEffect, useState } from "react";
import { getGoRovingPhotoList } from "../../../clients/grplClient";

export function GoRovingPhotoListPage() {
  const [photoList, setPhotoList] = useState();

  useEffect(function () {
    async function fetchAndSetGrpl() {
      setPhotoList(await getGoRovingPhotoList());
    }
    fetchAndSetGrpl();
  }, []);

  let listPhotos;
  if (photoList !== undefined) {
    listPhotos = (
      <>
        {photoList.map((photo) => (
          <li>
            <img src={photo.img_src} />
          </li>
        ))}
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
