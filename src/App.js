import React from "react";
import "./resources/styles.css";

import { Element } from "react-scroll";

import Header from "./components/header-footer/Header";
import Featured from "./components/featured";
import Highlight from "./components/highlights";
import VenueInfo from "./components/venueInfo/VenueInfo";
import Pricing from "./components/pricing";
import Location from "./components/location";
import Footer from "./components/header-footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Element name="featured">
        <Featured />
      </Element>
      <Element name="nfo">
        <VenueInfo />
      </Element>
      <Element name="highlights">
        <Highlight />
      </Element>
      <Element name="pricing">
        <Pricing />
      </Element>
      <Element name="location">
        <Location />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
