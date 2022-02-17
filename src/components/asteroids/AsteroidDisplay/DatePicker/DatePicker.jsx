import React, { useEffect, useState } from "react";
import { getAsteroids } from "../../../../clients/asteroidClient";
import { getDateOfWeek } from "../../../../helperFunctions/dateConverter";
import ClipLoader from "react-spinners/ClipLoader";
import { Asteroid } from "../../Asteroid/Asteroid";

export function DatePicker() {
  const [date, setDate] = useState("2022-W05");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [asteroidData, setAsteroidData] = useState();
  let formattedDate;

  useEffect(
    function () {
      formattedDate = getDateOfWeek(date);
      setLoading(true);
      setError(undefined);
      getAsteroids(formattedDate)
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
      <form>
        <label htmlFor="date">date:</label>
        <input
          type="week"
          id="date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
            console.log(date);
          }}
        />
      </form>
      <div className="asteroid-info">
        {!error ? (
          <h2>
            Number of asteroids near earth:
            {loading
              ? "Loading asteroids..."
              : asteroidData.near_earth_objects.formattedDate[0]}
          </h2>
        ) : (
          <p>Error: {error.message}</p>
        )}
      </div>

      <ClipLoader loading={loading} size={150} color={"#c0844f"} />
    </section>
  );
}
