import React, { useState, useEffect } from "react";
import { DatePicker } from "./DatePicker/DatePicker";
import ClipLoader from "react-spinners/ClipLoader";
import { getAsteroids } from "../../../clients/asteroidClient";
import { Asteroid } from "../Asteroid/Asteroid";

export function AsteroidDisplay() {
  const [date, setDate] = useState("2022-02-01");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [asteroidData, setAsteroidData] = useState();

  useEffect(
    function () {
      setLoading(true);
      setError(undefined);
      getAsteroids(date)
        .then((asteroid) => {
          setAsteroidData(asteroid);
          setLoading(false);
        })
        .catch((reason) => {
          setError(reason);
        });
    },
    [date]
  );

  return (
    <section className="neopage">
      <div className="neopage-upper-section">
        <DatePicker date={date} setDate={setDate} loading={loading} />
        <div className="neopage-upper-section-info">
          {loading ? (
            <div className="neopage-upper-section-info-loader-wrapper">
              Asteroids loading...
            </div>
          ) : (
            <Asteroid
              loading={loading}
              error={error}
              asteroidData={asteroidData}
              date={date}
            />
          )}
          <div className="neopage-upper-section-info-loader-wrapper">
            <ClipLoader loading={loading} size={75} color={"#c0844f"} />
          </div>
        </div>
      </div>
      <div className="neopage-image-wrapper">
        {/* <p>Hello</p> */}
        <img
          src="https://images.newscientist.com/wp-content/uploads/2020/06/04160433/r4500292-comet_ikeya-zhang_andromeda_galaxy_optical_web.jpg"
          alt="Meteor image"
        />
      </div>
    </section>
  );
}
