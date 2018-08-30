import React, { Component } from "react";
import ReactContents from "./ReactContents";
import PhpContents from "./PhpContents";
import ReduxContents from "./ReduxContents";

class CurrentlyLearning extends Component {
  render() {
    return (
      <div>
        <div className="box-wrapper">
          <div className="box">
            <ReactContents />
          </div>
          <div className="box">
            <PhpContents />
          </div>
          <div className="box">
            <ReduxContents />
          </div>
        </div>
      </div>
    );
  }
}

export default CurrentlyLearning;
