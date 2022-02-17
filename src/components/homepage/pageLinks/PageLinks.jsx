import React from "react";
import { Link } from "react-router-dom";
import { getRoverPhotos } from "../../../clients/marsPhotosClient";
import { useState, useEffect } from "react";

export function PageLinks() {
  const [imageUrl, setImageUrl] = useState();

  useEffect(function () {
    getRoverPhotos("curiosity", 1004).then((photos) => {
      setImageUrl(photos[0].img_src);
    });
  }, []);

  return (
    <section>
      <h1>Explore More...</h1>
      <div>
        <figcaption>Picture from Rover</figcaption>
        <Link to="/go-roving">
          <img src={imageUrl} />
        </Link>
      </div>
      <div>
        <Link to="/asteroids">
          <img src="https://images.newscientist.com/wp-content/uploads/2020/06/04160433/r4500292-comet_ikeya-zhang_andromeda_galaxy_optical_web.jpg" />
        </Link>
        <figcaption></figcaption>
      </div>
    </section>
  );
}
