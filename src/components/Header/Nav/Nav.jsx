import React, { Component } from "react";
import logo from './assets/TRASTEROS_ROMA.jpeg'
import { Link, animateScroll as scroll } from "react-scroll";
class Nav extends Component {
  render() {
    return <nav>
      <img  id='logo' srcSet={logo} alt="" />
      <div className="nav_links">
    <Link to="/">Home</Link>
    <Link
    activeClass="active"
    to="contact_form"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
>Contacto</Link>
<Link
    activeClass="active"
    to="map"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
>Ubicación</Link>
    
      </div>
    
    </nav>
  }
}

export default Nav;
