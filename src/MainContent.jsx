import React from "react";
import "./MainContent.css";
import RandomFacts from "./FactGenerator";

export default function MainContent() {
  return (
    <div className="container">
      <header>
        <h1 className="mt-4 mb-3">Fun Facts About Penguins</h1>
      </header>
      <ul className="pb-4 mb-0">
        <li className="pb-2">
          Penguins are birds that cannot fly, but they are excellent swimmers.
          They can swim up to speeds of 15 to 25 miles per hour.
        </li>
        <li className="pb-2">
          There are 18 different species of penguins, and they live almost
          exclusively in the southern hemisphere, including Antarctica, South
          America, New Zealand, and Australia.
        </li>
        <li className="pb-2">
          The emperor penguin is the tallest and heaviest of all penguin
          species, with some individuals standing up to 4 feet tall and weighing
          up to 90 pounds.
        </li>
        <li className="pb-2">
          Penguins have a gland located near their tails that produces an oil
          that they spread over their feathers to keep them waterproof and
          insulated.
        </li>
        <li className="pb-2">
          When penguins are looking for a mate, they engage in elaborate
          courtship rituals that involve bowing, calling, and offering pebbles
          to each other. They also form monogamous bonds with their mates and
          take turns caring for their eggs and chicks.
        </li>
      </ul>
      <RandomFacts />
    </div>
  );
}
