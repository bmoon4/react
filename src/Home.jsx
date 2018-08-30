import React, { Component } from "react";
import Header from "../header";
import Footer from "../Footer";
import HomeContents from "./HomeContents";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <HomeContents />
        <Footer />
      </div>
    );
  }
}

export default Home;
