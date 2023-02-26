import React, { useState } from "react";
import "./FactGenerator.css";

export default function FactGenerator() {
  const [fact, setFact] = useState("");

  const facts = [
    "A group of flamingos is called a flamboyance.",
    "Elephants are the only land mammals that can't jump.",
    "A group of hedgehogs is called a prickle.",
    "Polar bears are left-handed.",
    "Owls are one of the only birds who can see the color blue.",
    "Giraffes have no vocal cords.",
    "Sloths only defecate once a week.",
    "Cows have best friends.",
    "A group of rhinos is called a crash.",
    "Sharks have been on Earth for more than 400 million years.",
    "A group of kangaroos is called a mob.",
    "Cats have five toes on their front paws, but only four toes on their back paws.",
    "Koalas have fingerprints that are nearly indistinguishable from human fingerprints.",
    "Octopuses have three hearts.",
    "Dolphins have been observed giving themselves 'names' that other dolphins use to identify them.",
    "The fingerprints of a koala are so similar to human fingerprints that they have on occasion been confused at a crime scene.",
    "Bees can recognize human faces.",
    "A group of jellyfish is called a smack.",
    "Butterflies taste with their feet.",
    "A housefly hums in the key of F.",
    "Alligators can live up to 100 years.",
    "A group of porcupines is called a prickle.",
    "Chimpanzees can learn to recognize themselves in a mirror.",
    "A group of crows is called a murder.",
    "Kangaroos can't walk backwards.",
    "The eyes of a donkey are positioned so that they can see all four of their legs at all times.",
    "A group of otters is called a romp.",
    "Hummingbirds can fly backwards.",
    "Gorillas can catch human colds and other illnesses.",
    "A group of seagulls is called a colony.",
  ];

  function handleClick() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    setFact(facts[randomIndex]);
    console.log(randomIndex);
  }

  return (
    <div className="text-center">
      <h5>Interested in learning some more animal facts?</h5>
      <button className="btn fact-btn mt-1 mb-3" onClick={handleClick}>
        Generate Random Fact
      </button>
      <div className="fact-text mb-3">{fact && <p>{fact}</p>}</div>
    </div>
  );
}
