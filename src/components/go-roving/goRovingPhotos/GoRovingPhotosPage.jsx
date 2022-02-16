import React, { useEffect, useState } from "react";
import { getRoverPhotos } from "../../../clients/marsPhotosClient";
import { useParams } from "react-router-dom";
import { GoRovingPhoto } from "./GoRovingPhoto";
import { GoRovingPhotoList } from "./GoRovingPhotoList";

export function GoRovingPhotosPage() {
  const [photos, setPhotos] = useState();
  const [selectedPhoto, setSelectedPhoto] = useState();

  const params = useParams();
  const sol = 2000;
  useEffect(function () {
    async function fetchAndSetPhotos() {
      const fetchPhotos = await getRoverPhotos(params.roverName, sol);
      setPhotos(fetchPhotos);
      setSelectedPhoto(fetchPhotos[0]);
    }
    fetchAndSetPhotos();
  }, []);

  let listPhotos;
  if (photos !== undefined) {
    listPhotos = (
      <>
        {photos.length ? (
          <div>
            <GoRovingPhoto
              imgSrc={selectedPhoto?.img_src}
              camera={selectedPhoto?.camera?.name}
            />
            <h>👆Selected Photo</h>

            <h>👇Go Roving Photo List</h>
            <GoRovingPhotoList photos={photos} selected={selectedPhoto} />
          </div>
        ) : null}

        {/* 
        <ul>
          {photoList.map((photo) => (
            <li>
              <img src={photo.img_src} />
            </li>
          ))}
        </ul> */}
      </>
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
