import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import AboutContents from "./AboutContents";

class About extends Component {
  render() {
    return (
      <div>
        <Header />
        <AboutContents />
        <Footer />
      </div>
    );
  }
}

export default About;
