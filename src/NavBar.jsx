import React from "react";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="d-flex align-items-center justify-content-between">
      <span className="d-flex align-items-center">
        <img src="penguin.png" width="70px" alt="React logo" />
        <h3 className="mb-0">PenguinFacts</h3>
      </span>
      <h6 className="mb-0 me-2">Show Your Support</h6>
    </nav>
  );
}
