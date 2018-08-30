import React, { Component } from "react";
import HTML5Contents from "./HTML5Contents";
import NodeJSContents from "./NodeJSContents";
import JqueryContents from "./JqueryContents";

class AlreadyKnew extends Component {
  render() {
    return (
      <div>
        <div className="box-wrapper">
          <div className="box">
            <HTML5Contents />
          </div>
          <div className="box">
            <NodeJSContents />
          </div>
          <div className="box">
            <JqueryContents />
          </div>
        </div>
      </div>
    );
  }
}

export default AlreadyKnew;
