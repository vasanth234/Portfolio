import React from "react";
import { IoPerson } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import "./topbar.scss";
const Topbar = ({menuopen,setMenuopen}) => {
  return (
    <div className={"Topbar "+(menuopen && 'active')}>
      <div className="Wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Genius
          </a>
          <div className="itemcontainer">
            <IoPerson className='icon'/>
            <span>+33 343 535 34</span>
          </div>
          <div className="itemcontainer">
            <IoMail  className='icon'/>
            <span>pipparivasanth66708@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <div className='Hamburger'onClick={()=>setMenuopen(!menuopen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
