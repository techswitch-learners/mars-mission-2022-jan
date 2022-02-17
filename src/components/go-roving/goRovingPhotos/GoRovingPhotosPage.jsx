import React, { useEffect, useState } from "react";
import { getRoverPhotos } from "../../../clients/marsPhotosClient";
import { useParams } from "react-router-dom";
import { GoRovingPhoto } from "./GoRovingPhoto";
import { GoRovingPhotoList } from "./GoRovingPhotoList";

export function GoRovingPhotosPage() {
  const [photos, setPhotos] = useState();
  const [selectedPhoto, setSelectedPhoto] = useState();
  const params = useParams();
  const sol = 1900;

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
        <h1>Photos taken from {photos[0].rover.name} </h1>
        {photos.length ? (
          <div>
            {selectedPhoto ? (
              <GoRovingPhoto photo={selectedPhoto} /> //defaults first photo as the main photo
            ) : (
              <h2> No photos selected </h2>
            )}

            <GoRovingPhotoList
              photos={photos}
              onClick={(photo) => setSelectedPhoto(photo)} //then display remaining photos
            />
          </div>
        ) : null}
      </>
    );
  } else {
    listPhotos = <p>Loading photos...</p>;
  }

  return <main>{listPhotos}</main>;
}
