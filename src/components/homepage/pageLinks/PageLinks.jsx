import React from "react";
import { Link } from "react-router-dom";

export function PageLinks() {
  return (
    <section>
      <h1>Explore More...</h1>
      <div>
        <Link to="/go-roving">
          <img src="https://www.issnationallab.org/wp-content/uploads/2018/05/opportunity-rover-square.jpg" />
        </Link>
        <figcaption></figcaption>
      </div>
      <div>
        <Link to="/asteroids">
          <img src="https://images.newscientist.com/wp-content/uploads/2020/06/04160433/r4500292-comet_ikeya-zhang_andromeda_galaxy_optical_web.jpg" />
        </Link>
        <figcaption></figcaption>
      </div>
    </section>
  );
}
