const interestingFacts = [
  `Saturn is the only planet in our solar system that is less dense than water. 
  It could float in a bathtub if anybody could build a bathtub big enough!`,

  `Neptune’s winds are the fastest in the solar system, reaching 2,575 
  kilometres per hour (1,600 miles per hour)! Neptune’s giant, spinning storms 
  could swallow the whole Earth.`,

  `More than 1,300 Earths would fit into Jupiter’s vast sphere.`,

  `Jupiter’s moon Io is the most volcanically active body in our solar system.
   The moon’s bizarre, blotted yellowish surface looks like a pepperoni pizza!`,

  `The gravity on Mars is approximately one-third that on Earth. Yes, chances 
   are you’d be able to dunk the basketball on a Martian court!`,

  `The average temperature on Venus is more than 480 degrees Celsius (about 900 
    degrees Fahrenheit) — hotter than a self-cleaning oven.`,

  `Craters at the Moon’s south pole may be the frostiest locale in the entire solar system. 
    In the permanently shadowed crater floors, “daytime” temperatures may never rise above minus 
    238 degrees Celsius (minus 397 degrees Fahrenheit).`,

  `True to its namesake (the speedy messenger of ancient Roman gods), Mercury is the fastest
     planet in our solar system. It zips around our Sun at an average of 172,000 kilometres per hour
      (107,000 miles per hour) — about 65,000 kph (40,000 mph) faster than Earth. A year on Mercury 
      is equal to 88 Earth days.`,

  `If you could lump together all the thousands of known asteroids in our solar system, their total
     mass wouldn’t even equal 10 percent of the mass of Earth’s Moon.`,
];

export function getInterestingFact() {
  const selection = Math.floor(Math.random() * interestingFacts.length);

  return interestingFacts[selection];
}
