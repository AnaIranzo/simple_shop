import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import banner from './assets/banner.jpeg'


class Banner extends Component {
  render() {
    return  <section className="banner_section">
     
      <img src={banner} id="banner_img" alt="" />
    
    <article id="banner_text">
      <h1>
        Trasteros Roma
      </h1>
      <p>
        Tus bienes en buenas manos
      </p>
      <button><Link
    activeClass="active"
    to="contact_form"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
>Contactános</Link></button>
    </article>
    
  </section>
  }
}

export default Banner;
