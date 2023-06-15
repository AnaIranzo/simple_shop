import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from './assets/TRASTEROS_ROMA.jpeg'

class Nav extends Component {
  render() {
    return <nav>
      <img srcSet={logo} alt="" />
      <div className="nav_links">
    <Link to="/">Home</Link>
    <Link to="/contact">Contacto</Link>
    <Link  to="/map">Ubicación</Link> 
      </div>
    
    </nav>
  }
}

export default Nav;
