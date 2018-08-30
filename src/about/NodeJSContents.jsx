import React, { Component } from "react";

class NodeJSContents extends Component {
  render() {
    return (
      <div>
        <div id="skills">
          <img
            src={require("../image/node.png")}
            alt="Node.js"
            height="200px"
          />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    );
  }
}

export default NodeJSContents;
