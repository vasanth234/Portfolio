import React from "react";
import "./contact.scss";
import {useState} from 'react'
const Contact = () => {
  const [message,setMessage]=useState(false)

  const Handlesubmit=(e)=>{
    e.preventDefault();
    setMessage(true)

  }
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg"  alt=""/>
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={Handlesubmit}>
          <input type='text' placeholder="Email"/>
          <textarea placeholder="Message"></textarea>
          <button type='submit'>Send</button>
          {
            message && <span>Thanks ,i had submitted</span>
          }
        </form>
      </div>
    </div>
  );
};

export default Contact;
