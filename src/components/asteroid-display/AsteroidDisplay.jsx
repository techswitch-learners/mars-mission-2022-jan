import React from "react";

export function AsteroidDisplay(diameter, velocity, distance) {
  return (
    <main>
      <h2>Diameter:</h2>
      <p>{diameter}</p>
      <h2>Veloicty:</h2>
      <p>{velocity}</p>
      <h2>Distance:</h2>
      <p>{distance}</p>
      <img src="" alt="" />
    </main>
  );
}
