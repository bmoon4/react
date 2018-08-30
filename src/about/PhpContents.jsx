import React, { Component } from "react";

class PhpContents extends Component {
  render() {
    return (
      <div>
        <div id="skills">
          <img src={require("../image/php.png")} alt="PHP" height="200px" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    );
  }
}

export default PhpContents;
