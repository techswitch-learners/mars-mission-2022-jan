import React from "react";
import { getInterestingFact } from "../../../clients/interestingFactClient";

export function InterestingFact() {
  return (
    <section>
      <h1>💡 Did you know...? 🪐🌌</h1>
      <p>{getInterestingFact()}</p>
    </section>
  );
}
