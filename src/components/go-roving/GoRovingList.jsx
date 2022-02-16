import react from "react";
import { GoRovingRover } from "./GoRovingRover";

export function GoRovingList({ rovers }) {
  return (
    <div className="rover-list">
      {rovers.map((rover, index) => (
        <div className="rover" key={index}>
          <GoRovingRover rover={rover} />
        </div>
      ))}
    </div>
  );
}
