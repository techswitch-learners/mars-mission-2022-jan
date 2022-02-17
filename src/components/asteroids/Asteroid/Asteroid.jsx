import React from "react";

export function Asteroid({ asteroidData, error, loading }) {
  return (
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
                  travelling at
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
  );
}
