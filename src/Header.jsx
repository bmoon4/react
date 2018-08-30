import React, { Component } from "react";
import Nav from "./Nav";
import Logo from "./Logo";

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <Logo />
          <Nav />
        </header>
      </div>
    );
  }
}

export default Header;
