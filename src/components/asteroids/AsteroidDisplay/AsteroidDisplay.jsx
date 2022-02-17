import React, { useState, useEffect } from "react";
import { DatePicker } from "./DatePicker/DatePicker";
import ClipLoader from "react-spinners/ClipLoader";
import { getAsteroids } from "../../../clients/asteroidClient";

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
    <section>
      <div className="asteroid-display-content"></div>
      <DatePicker date={date} setDate={setDate} />
      <div className="asteroid-info">
        {!error ? (
          <>
            <h2>Asteroids near earth: </h2>
            <div className="results">
              {loading ? (
                "Loading asteroids..."
              ) : (
                <>
                  <h4>{asteroidData.element_count} total asteroids</h4>
                  <h4>Nearest Asteroid = </h4>

                  <p>
                    {
                      asteroidData.near_earth_objects[[date]][0]
                        .estimated_diameter.kilometers.estimated_diameter_max
                    }
                    km in diameter
                  </p>
                  <p>
                    travelling at{" "}
                    {
                      asteroidData.near_earth_objects[[date]][0]
                        .close_approach_data[0].relative_velocity
                        .kilometers_per_second
                    }
                    km per second.
                  </p>
                  <p>
                    {
                      asteroidData.near_earth_objects[[date]][0]
                        .close_approach_data[0].miss_distance.kilometers
                    }
                    km away from the earth
                  </p>
                </>
              )}
            </div>
          </>
        ) : (
          <p>Error: {error.message}</p>
        )}
      </div>
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
