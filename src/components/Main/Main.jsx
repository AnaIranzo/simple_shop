import React, { Component } from "react";
import Banner from "./Banner/Banner";
import Card from "./Card/Card";
import Contact from './Contact/Contact';
import Map from './Map/Map';

class Main extends Component {
  render() {
    return <main>
    <Banner/>
    <Card/>
    <Contact/>
    <Map/>
    
    </main>;
  }
}

export default Main;
