import React, { Component } from "react";
import banner from './assets/banner.jpeg'

class Banner extends Component {
  render() {
    return  <section className="banner_section">
     
      <img src={banner} id="banner_img" alt="" />
    
    <article>
      <h1>
        Trasteros Roma
      </h1>
      <p>
        Tus bienes en buenas manos
      </p>
      <button>Contáctanos</button>
    </article>
    
  </section>
  }
}

export default Banner;
