import React, { useEffect, useState } from "react";
import { getAsteroids } from "../../../../clients/asteroidClient";

export function DatePicker() {
  const [fromDate, setFromDate] = useState("2022-02-01");
  const [toDate, setToDate] = useState("2022-02-07");
  const [loading, setLoading] = useState();

  const [asteroidData, setAsteroidData] = useState(
    getAsteroids(fromDate, toDate)
  );

  let asteroidCount;
  if (!asteroidData) {
    asteroidCount = "Loading asteroids...";
  } else {
    asteroidCount = asteroidData.element_count;
  }

  return (
    <section>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setLoading(true);
          setAsteroidData(await getAsteroids(fromDate, toDate));
          setLoading(false);
        }}
      >
        <label htmlFor="fromDate">from:</label>
        <input
          type="date"
          id="fromDate"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
        />

        <label htmlFor="toDate">to:</label>
        <input
          type="date"
          id="toDate"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
        />
        <input type="submit" />
      </form>
      <div className="asteroid-info">
        <h2>
          Number of asteroids near earth:{" "}
          {loading ? "Loading asteroids..." : asteroidCount}{" "}
        </h2>
      </div>
    </section>
  );
}
