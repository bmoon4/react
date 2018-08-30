import React, { Component } from "react";

class ReactContents extends Component {
  render() {
    return (
      <div>
        <div id="skills">
          <img src={require("../image/react.png")} alt="react" height="200px" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    );
  }
}

export default ReactContents;
