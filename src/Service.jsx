import React, { Component } from "react";
import Header from "../header";
import Footer from "../Footer";
import ServiceContents from "./ServiceContents";

class Service extends Component {
  render() {
    return (
      <div>
        <Header />
        <ServiceContents />
        <Footer />
      </div>
    );
  }
}

export default Service;
