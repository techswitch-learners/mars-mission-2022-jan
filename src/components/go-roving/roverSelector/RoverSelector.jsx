import React from "react";
import { rovers } from "../roverData/roverData";
import { GoRovingRover } from "../GoRovingRover";
import "./RoverSelector.scss";

export function RoverSelector({ roverName }) {
  const filteredRovers = rovers.filter(
    (rover) => rover.name.toLowerCase() !== roverName?.toLowerCase()
  );

  return (
    <div className="rover-selector">
      <ul className="rover-selector-list">
        {filteredRovers.map((rover, name) => (
          <li className="rover-selector-list-item" key={name}>
            <GoRovingRover rover={rover} />
          </li>
        ))}
      </ul>
    </div>
  );
}
