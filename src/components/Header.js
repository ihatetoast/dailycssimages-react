import React, { Component } from "react";
import Navpills from "./Navpills";

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Daily Images</h1>
        <p>
          My submissions to{" "}
          <a href="http://dailycssimages.com/">Daily CSS Images </a> and Daily
          SVG Images.
        </p>
        <Navpills />
      </header>
    );
  }
}

export default Header;
