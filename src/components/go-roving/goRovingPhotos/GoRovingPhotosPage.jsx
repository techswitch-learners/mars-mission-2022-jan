import React, { useEffect, useState } from "react";
import { getRoverPhotos } from "../../../clients/marsPhotosClient";
import { useParams } from "react-router-dom";

export function GoRovingPhotosPage() {
  const [photos, setPhotos] = useState();

  const params = useParams();
  const sol = 1000;
  useEffect(function () {
    async function fetchAndSetPhotos() {
      setPhotos(await getRoverPhotos(params.roverName, sol));
    }
    fetchAndSetPhotos();
  }, []);

  let listPhotos;
  if (photos !== undefined) {
    listPhotos = (
      <ul>
        {photos.map((photo) => (
          <li>
            <img src={photo.img_src} alt={photo.camera.full_name} />
          </li>
        ))}
      </ul>
    );
  } else {
    listPhotos = <p>Loading photos...</p>;
  }

  return (
    <main>
      <h1>Photos taken from {params.roverName} :</h1>
      {listPhotos}
    </main>
  );
}
