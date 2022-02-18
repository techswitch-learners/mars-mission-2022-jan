import React from "react";
import { getDiameterInFootballPitches } from "../../../helperFunctions/converterFunctions";
import { getVelocityByFormulaOneCar } from "../../../helperFunctions/converterFunctions";
import { getDistanceFromEarthByShard } from "../../../helperFunctions/converterFunctions";

export function Asteroid({ asteroidData, date }) {
  const diameterInFootballPitches = asteroidData.near_earth_objects[[date]]
    ? getDiameterInFootballPitches(
        asteroidData.near_earth_objects[[date]][0].estimated_diameter.kilometers
          .estimated_diameter_max
      )
    : undefined;
  const VelocityByFormulaOneCar = asteroidData.near_earth_objects[[date]]
    ? getVelocityByFormulaOneCar(
        asteroidData.near_earth_objects[[date]][0]?.close_approach_data[0]
          .relative_velocity.kilometers_per_second
      )
    : undefined;
  const DistanceFromEarthByShard = asteroidData.near_earth_objects[[date]]
    ? getDistanceFromEarthByShard(
        asteroidData.near_earth_objects[[date]][0]?.close_approach_data[0]
          .miss_distance.kilometers
      )
    : undefined;
  return (
    <div className="asteroid-info">
      <h2>Asteroids near earth: </h2>
      {!asteroidData.near_earth_objects[[date]] ? (
        "There are no asteroids for the chosen day!"
      ) : (
        <div className="asteroid-container">
          <p>{asteroidData?.element_count} total asteroids near earth:</p>
          <h2>Nearest Asteroid is ...</h2>

          <p>
            {diameterInFootballPitches + " "}
            football pitches wide!
          </p>
          <p>
            Travelling
            {" " + VelocityByFormulaOneCar + " "}
            times faster than a formula1 car!
          </p>
          <p>
            Stack up the Shard
            {" " + DistanceFromEarthByShard + " "}
            times! That's how far away it is.
          </p>
        </div>
      )}
    </div>
  );
}
