import React, { useState } from "react";
import { getAsteroids } from "../../../../clients/asteroidClient";

export function DatePicker() {
  const [fromDate, setFromDate] = useState("2022-02-01");
  const [toDate, setToDate] = useState("2022-02-07");
  const [asteroidData, setAsteroidData] = useState(
    getAsteroids(fromDate, toDate)
  );

  return (
    <main>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setAsteroidData(getAsteroids(fromDate, toDate));
        }}
      >
        <label htmlFor="fromDate" onChange={(e) => setFromDate(e.target.value)}>
          from:
        </label>
        <input type="date" id="fromDate" />

        <label htmlFor="toDate" onChange={(e) => setToDate(e.target.value)}>
          to:
        </label>
        <input type="date" id="toDate" />
      </form>
      <div className="asteroid-info">
        <h2>Number of asteroids near earth:</h2>
        <p>{asteroidData.nearEarthObjects.length}</p>
      </div>
    </main>
  );
}
