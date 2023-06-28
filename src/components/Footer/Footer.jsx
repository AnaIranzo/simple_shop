import React, { Component } from "react";
import { Link } from "react-scroll";
import instagram from '../Footer/assets/ig.svg';
import facebook from '../Footer/assets/free_icon_1.svg';

class Footer extends Component {
  render() {
    return <footer>


      <div className="social">
        <Link><img src={instagram} alt="" srcset="" /></Link>
        <Link><img src={facebook} alt="" srcset="" /></Link>

      </div>
      <div className="dir">
        <h3>Calle De Los Transportes Nave 7. CP 06800 Mérida</h3>
      </div>
      <div className="links">
        <Link>Preguntas frecuentes</Link>
        <Link>Política de Privacidad</Link>
        <Link>Aviso Legal</Link>
      </div>


    </footer>;
  }
}

export default Footer;
