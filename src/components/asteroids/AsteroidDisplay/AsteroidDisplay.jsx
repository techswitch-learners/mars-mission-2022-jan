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
    <section className="asteroid-grid">
      <DatePicker date={date} setDate={setDate} loading={loading} />
      {loading ? (
        "Loading asteroids for " + date + "..."
      ) : (
        <Asteroid
          loading={loading}
          error={error}
          asteroidData={asteroidData}
          date={date}
        />
      )}
      <ClipLoader loading={loading} size={150} color={"#c0844f"} />
      <div className="image">
        <img
          src="https://images.newscientist.com/wp-content/uploads/2020/06/04160433/r4500292-comet_ikeya-zhang_andromeda_galaxy_optical_web.jpg"
          alt="Meteor image"
        />
      </div>
    </section>
  );
}
