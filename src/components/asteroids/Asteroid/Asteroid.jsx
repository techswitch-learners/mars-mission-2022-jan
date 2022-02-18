import React from "react";
import { getDiameterInFootballPitches } from "../../../helperFunctions/converterFunctions";
import { getVelocityByFormulaOneCar } from "../../../helperFunctions/converterFunctions";
import { getDistanceFromEarthByShard } from "../../../helperFunctions/converterFunctions";

export function Asteroid({ asteroidData, date }) {
  const diameterInMeters = getDiameterInFootballPitches(
    asteroidData.near_earth_objects[[date]][0].estimated_diameter.kilometers
      .estimated_diameter_max
  );
  const velocityByMeter = getVelocityByFormulaOneCar(
    asteroidData.near_earth_objects[[date]][0].close_approach_data[0]
      .relative_velocity.kilometers_per_second
  );
  const distanceInKm = getDistanceFromEarthByShard(
    asteroidData.near_earth_objects[[date]][0].close_approach_data[0]
      .miss_distance.kilometers
  );
  return (
    <div className="asteroid-info">
      <h2>Asteroids near earth: </h2>
      {!asteroidData.near_earth_objects[[date]] ? (
        "There are no asteroids for the chosen day!"
      ) : (
        <>
          <p>
            {asteroidData.element_count} total asteroids near earth on {date}
          </p>
          <p>Nearest Asteroid is ...</p>

          <p>
            {diameterInMeters + " "}
            football pitches wide!
          </p>
          <p>
            Travelling
            {" " + velocityByMeter + " "}
            times faster than a formula1 car!
          </p>
          <p>
            Stack up the Shard
            {" " + distanceInKm + " "}
            times! That's how far away it is.
          </p>
        </>
      )}
    </div>
  );
}
