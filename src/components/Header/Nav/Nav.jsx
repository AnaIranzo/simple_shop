import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return <nav >
    <Link to="/">Home</Link>
    <Link to="/contact">Contacto</Link>
    <Link  to="/map">Ubicación</Link> 
    </nav>
  }
}

export default Nav;
