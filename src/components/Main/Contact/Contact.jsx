import React, { Component } from "react";

class Contact extends Component {
  render() {
    return <form action="https://formsubmit.co/aeiranzom@gmail.com" method="POST" >

      <input className='contact_form' type="text"  placeholder='Nombre' name="name" required/>
      
      
      <input className='contact_form' type="email" placeholder='Email' name="email" required/>

      <textarea className='contact_form' name="message" id="" cols="30" rows="10" placeholder='Mensaje' required></textarea>
      <button type="submit">Enviar</button>
    </form>;
  }
}

export default Contact;
