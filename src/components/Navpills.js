import React from "react";
import { Link } from "react-router-dom";

const Navpills = () => (
  <ul className="navButtons">
    <li className={window.location.pathname === "/" ? "active" : ""}>
      <Link to="/">Home</Link>
    </li>
    <li className={window.location.pathname === "/css" ? "active" : ""}>
      <Link to="/css">CSS</Link>
    </li>
    <li className={window.location.pathname === "/svgs" ? "active" : ""}>
      <Link to="/svgs">SVGs</Link>
    </li>
    <li className={window.location.pathname === "/contact" ? "active" : ""}>
      <Link to="/contact">Find me</Link>
    </li>
  </ul>
);

export default Navpills;
