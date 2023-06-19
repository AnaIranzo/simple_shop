import React, { Component } from "react";

class Contact extends Component {
  render() {
    return <form>
      
      <input className='contact_form' type="text"  placeholder='Nombre'/>
      
      
      <input className='contact_form' type="email" placeholder='Email'/>

      <textarea className='contact_form' name="" id="" cols="30" rows="10" placeholder='Mensaje'></textarea>
      <input type="submit" />
    </form>;
  }
}

export default Contact;
