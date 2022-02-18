import React from "react";
import { getInterestingFact } from "../../../clients/interestingFactClient";

export function InterestingFact() {
  return (
    <section className="interesting-fact">
      <h1>💡 Did you know...? 🪐🌌</h1>
      <p>{getInterestingFact()}</p>
    </section>
  );
}
