import React from 'react'
import "./Footer.css"


import Logo from '../Logo/Logo';

function Footer() {
  return (
    <div className="footer">
    <div className="top">
      <div className="item">
        <h1>Categories</h1>
        <span>Magazine</span>
        <span>Team</span>
        <span>FAQ</span>
        <span>Founders</span>
        <span>About</span>
      </div>
    
    <div className="item">
    <Logo/>
    </div>
    </div>
    <div className="bottom">
      <div className="left">
        <span className="logo">River Bridge</span>
        {/* <span className="copyright">© Copyright 2022. All Rights Reserved©</span> */}
        <span className="copyright">
        © All rights reserved River Bridge ©
        </span>
      </div>
    </div>
  </div>
  )
}

export default Footer
