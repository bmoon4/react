import React, { Component } from "react";
import Showcase from "./Showcase";

class HomeContents extends Component {
  render() {
    return (
      <div>
        <div className="homeContents">
          <Showcase />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lorem
            risus, semper vitae porttitor ac, malesuada vel diam. Ut fringilla
            nunc at tempus aliquam. Phasellus ut nisi nunc. Suspendisse
            consequat ante vel sapien consequat, eget malesuada enim venenatis.
            Etiam ac vulputate est. Curabitur pretium velit a condimentum
            viverra. Quisque cursus est sem, a mollis diam euismod et.
            Suspendisse sagittis quis elit nec aliquam. Nunc feugiat lacus at
            diam consequat fringilla. Nullam condimentum, tellus nec efficitur
            ullamcorper, nunc nunc sodales metus, in condimentum justo sapien ut
            diam. Nunc consequat neque arcu, eget tincidunt lacus tincidunt
            quis. Sed vel est consectetur, lobortis lectus non, varius justo.
            Donec interdum nunc mauris, ut egestas justo molestie in. Phasellus
            tempus eros non erat sagittis, a fringilla orci interdum. Maecenas
            vitae ligula purus.{" "}
          </p>
        </div>
      </div>
    );
  }
}

export default HomeContents;
