import React, { useEffect, useState } from "react";
import { getAsteroids } from "../../../../clients/asteroidClient";
import { getDateOfWeek } from "../../../../helperFunctions/dateConverter";

export function DatePicker() {
  const [date, setDate] = useState("2022-W05");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [asteroidData, setAsteroidData] = useState();

  useEffect(
    function () {
      const formattedDate = getDateOfWeek(date);
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
      <form
      // onSubmit={async (e) => {
      //   e.preventDefault();
      //   setLoading(true);
      //   setAsteroidData(await getAsteroids(fromDate, toDate));
      //   setLoading(false);
      // }}
      >
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
            {loading ? "Loading asteroids..." : asteroidData.element_count}
          </h2>
        ) : (
          <p>Error: {error.message}</p>
        )}
      </div>
    </section>
  );
}
