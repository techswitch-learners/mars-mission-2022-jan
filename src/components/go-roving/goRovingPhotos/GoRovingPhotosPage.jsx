import React, { useEffect, useState } from "react";
import { getRoverPhotos } from "../../../clients/marsPhotosClient";
import { useParams, Link, useSearchParams } from "react-router-dom";
import { GoRovingPhoto } from "./GoRovingPhoto";
import { GoRovingPhotoList } from "./GoRovingPhotoList";

export function GoRovingPhotosPage() {
  const [photos, setPhotos] = useState();
  const [selectedPhoto, setSelectedPhoto] = useState();
  const params = useParams();
  const sol = 1900;
  const [searchParams] = useSearchParams(); // for use next/prev
  const pageNumber = Number(searchParams.get("page") || "1"); //default to page 1

  useEffect(
    function () {
      async function fetchAndSetPhotos() {
        const fetchPhotos = await getRoverPhotos(
          params.roverName,
          sol,
          pageNumber
        );
        setPhotos(fetchPhotos);
        setSelectedPhoto(fetchPhotos[0]);
      }
      fetchAndSetPhotos();
    },
    [pageNumber]
  );

  let listPhotos;
  if (photos !== undefined) {
    listPhotos = (
      <>
        {photos.length ? (
          <div>
            <h1>
              Page {pageNumber} of Photos taken from {photos[0].rover.name}{" "}
            </h1>
            {selectedPhoto ? (
              <GoRovingPhoto photo={selectedPhoto} /> //first photo as the main photo
            ) : (
              <h2> No photos selected </h2>
            )}
          </div>
        ) : null}
        <div>
          {pageNumber > 1 ? (
            <Link to={`?page=${pageNumber - 1}`}> ⏪Previous </Link>
          ) : null}
          <Link to={`?page=${pageNumber + 1}`}>Next ⏩</Link>
        </div>
        {photos.length ? (
          <GoRovingPhotoList
            photos={photos}
            onClick={(photo) => setSelectedPhoto(photo)} //then display remaining photos
          />
        ) : null}
      </>
    );
  } else {
    listPhotos = <p>Loading photos...</p>;
  }

  return <main>{listPhotos}</main>;
}
