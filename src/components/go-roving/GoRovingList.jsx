import React from "react";
import { GoRovingRover } from "./GoRovingRover";

export function GoRovingList({ rovers }) {
  return (
    <ul className="rover-list">
      {rovers.map((rover, index) => (
        <li className="rover-list-item" key={index}>
          <GoRovingRover rover={rover} />
        </li>
      ))}
    </ul>
  );
}
