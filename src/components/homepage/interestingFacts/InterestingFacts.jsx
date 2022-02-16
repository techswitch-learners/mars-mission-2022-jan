import React from "react";
import { fact } from "../../../clients/interestingFactsClient";

export function InterestingFact() {
  return (
    <section>
      <h1>💡 Did you know...? 🪐🌌</h1>
      <p>{fact}</p>
    </section>
  );
}
