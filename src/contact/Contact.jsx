import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import ContactContents from "./ContactContents";

class Service extends Component {
  render() {
    return (
      <div>
        <Header />
        <ContactContents />
        <Footer />
      </div>
    );
  }
}

export default Service;
