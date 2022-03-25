import React, { useState } from "react";
import dynastylogo from '../images/dynasty.svg';
import '../App.css';
import { XLg } from 'react-bootstrap-icons';
import { List } from 'react-bootstrap-icons';



function Navbar() {


  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className='navbar'>
      <button className='mobile-menu' onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? (
              <XLg style={{ color:"#000", width: "40px", height: "40px" }} />
          ) : (
              <List style={{ color: "#000", width: "40px", height: "40px" }} />
          )}
      </button>
      <div className='nav-item'>
          <ul>
            <img src={dynastylogo} alt="" />
            <nav className={isMobile ? "navMenu-mobile" : "navMenu" } onClick={() => setIsMobile(false)} >
              <li id='register1'><a href="#">Get started</a></li>
              <li id='register'><a href="#">Pitch Deck</a></li>
            </nav>
          </ul>
      </div>
    </div>
  );
}

export default Navbar;
