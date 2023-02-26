import React from "react";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="d-flex align-items-center justify-content-between">
      <span className="d-flex align-items-center">
        <img src="penguin.png" width="70px" alt="React logo" />
        <h3 className="mb-0">PenguinFacts</h3>
      </span>
      <h6 className="mb-0 me-2">
        <a
          href="https://support.worldwildlife.org/site/Donation2?df_id=14597&14597.donation=form1&s_src=AWE2006OQ18492A03648RX&gclid=Cj0KCQiAgOefBhDgARIsAMhqXA5fyOIHkMJ-QSjVtAKXXqH_ME-kowgsmETny9Zy_yOps7VCBDrVMGIaAn1yEALw_wcB"
          className="support-link"
          target="_blank"
          rel="noreferrer"
        >
          <span className="full-text">Show Your Support</span>
          <span className="short-text">Support</span>
        </a>
      </h6>
    </nav>
  );
}
