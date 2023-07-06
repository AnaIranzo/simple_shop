import React, { Component } from "react";
import { Link} from "react-scroll";
import banner from './assets/pexels-mariam-antadze-5913380.jpg'


class Banner extends Component {
  render() {
    return  <section className="banner_section">
     
      <img src={banner} id="banner_img" alt="" />
    
    <article id="banner_text">
      <h1>
        Shop
      </h1>
      <p>
        
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
