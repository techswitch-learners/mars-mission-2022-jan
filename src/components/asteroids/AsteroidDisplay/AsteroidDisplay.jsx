import React from "react";
import { DatePicker } from "./DatePicker/DatePicker";

export function AsteroidDisplay() {
  return (
    <section>
      <div className="asteroid-display-content"></div>
      <DatePicker />
      <div className="image">
        <img
          src="https://images.newscientist.com/wp-content/uploads/2020/06/04160433/r4500292-comet_ikeya-zhang_andromeda_galaxy_optical_web.jpg"
          alt="Meteor image"
        />
      </div>
    </section>
  );
}
