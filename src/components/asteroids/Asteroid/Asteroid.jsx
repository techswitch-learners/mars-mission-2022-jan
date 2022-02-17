import React from "react";

export function Asteroid({ asteroidData, date }) {
  return (
    <div className="asteroid-info">
      <h2>Asteroids near earth: </h2>
      {!asteroidData.near_earth_objects[[date]] ? (
        "There are no asteroids for the chosen day!"
      ) : (
        <>
          <h4>
            {asteroidData.element_count} total asteroids near earth on {date}
          </h4>
          <h4>Nearest Asteroid = </h4>

          <p>
            {
              asteroidData.near_earth_objects[[date]][0].estimated_diameter
                .kilometers.estimated_diameter_max
            }
            km in diameter
          </p>
          <p>
            travelling at
            {
              asteroidData.near_earth_objects[[date]][0].close_approach_data[0]
                .relative_velocity.kilometers_per_second
            }
            km per second.
          </p>
          <p>
            {
              asteroidData.near_earth_objects[[date]][0].close_approach_data[0]
                .miss_distance.kilometers
            }
            km away from the earth
          </p>
        </>
      )}
    </div>
  );
}
