import React, { Component } from "react";

class ContactContents extends Component {
  render() {
    return (
      <div>
        <div className="contactContents">
          <h1>Contact</h1>
          <br />
          <div className="contactInfo">
            <h2>Bokyung Moon</h2>
            <h3>Email: bkmoon0702@gmail.com</h3>
            <h3>Phone: 778.680.3992</h3>
            <h3>
              LinkedIn:{" "}
              <a href="https://www.linkedin.com/in/elainemoon07/">
                https://www.linkedin.com/in/elainemoon07/
              </a>
            </h3>
            <h3>
              GitHub:{" "}
              <a href="https://github.com/bmoon4">https://github.com/bmoon4</a>
            </h3>
            <br />
            <br />
            <h1>Portfolio</h1>
            <h2>Responsive Webpages (jQuery, HTML, CSS)</h2>
            <ul>
              <li>
                <a href="https://youtu.be/ThFSaWK1zQM">
                  https://youtu.be/ThFSaWK1zQM
                </a>
              </li>
              <li>
                <a href="https://youtu.be/djFzoKSrV70">
                  https://youtu.be/djFzoKSrV70
                </a>
              </li>
            </ul>

            <h2>My Personal Webpages (Angular | Static HTML)</h2>
            <ul>
              <li>
                <a href="https://bkmoon.herokuapp.com/portfolio">
                  https://bkmoon.herokuapp.com/portfolio
                </a>
              </li>
              <li>
                <a href="http://bmoon4.github.io/">http://bmoon4.github.io/</a>
              </li>
            </ul>

            <h2>Bulletin Board & Login Practice (Node.js|MongoDB)</h2>
            <ul>
              <li>
                <a href="https://nodejsbkmoon.herokuapp.com/">
                  https://nodejsbkmoon.herokuapp.com/
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactContents;
