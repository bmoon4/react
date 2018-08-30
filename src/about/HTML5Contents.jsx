import React, { Component } from "react";

class HTML5Contents extends Component {
  render() {
    return (
      <div>
        <div id="skills">
          <img src={require("../image/html5.png")} alt="html5" height="200px" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    );
  }
}

export default HTML5Contents;
