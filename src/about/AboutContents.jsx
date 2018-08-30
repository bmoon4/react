import React, { Component } from "react";
import CurrentlyLearning from "./CurrentlyLearning";
import AlreadyKnew from "./AlreadyKnew";

class AboutContents extends Component {
  render() {
    return (
      <div>
        <div className="aboutContents">
          <h1>My Skills</h1>
          <h2>Current SKills</h2>
          <AlreadyKnew />
          <h2>Newly Learning...</h2>
          <CurrentlyLearning />
        </div>
      </div>
    );
  }
}

export default AboutContents;
