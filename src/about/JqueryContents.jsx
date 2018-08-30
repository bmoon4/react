import React, { Component } from "react";

class JqueryContents extends Component {
  render() {
    return (
      <div>
        <div id="skills">
          <img
            src={require("../image/jquery.png")}
            alt="jquery"
            height="200px"
          />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    );
  }
}

export default JqueryContents;
