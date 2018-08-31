import React, { Component } from "react";

class Showcase extends Component {
  render() {
    return (
      <div>
        <div className="showcase">
          <h1>This is Showcase</h1>
          <div id="showcaseContents">
            <p >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lorem
              risus, semper vitae porttitor ac, malesuada vel diam. Ut fringilla
              nunc at tempus aliquam. Phasellus ut nisi nunc. Suspendisse
              consequat ante vel sapien consequat, eget malesuada enim venenatis.
          </p>
          </div>

          <div id="btnToGit">
            <a href="https://github.com/bmoon4/react"><button id="gitHub">View Sourcecode</button></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Showcase;
