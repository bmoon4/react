import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div>
        <div id="nav">
          <nav>
            <ul>
              <li>
                <Link to="/">HOME </Link>|
              </li>
              <li>
                <Link to="/about">ABOUT </Link>|
              </li>
              <li>
                <Link to="/todolist">
                  <span id="highlight">TO-DO APP </span>
                </Link>
                |
              </li>
              <li>
                <Link to="/contact">CONTACT</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Nav;
