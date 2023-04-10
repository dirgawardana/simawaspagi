import React from 'react'
import "../css/Header.css"
import { GiHamburgerMenu } from 'react-icons/gi'
import logosimawas from '../Images/logosimawas.png'

function Header() {
  function mobileNavBar() {
    var x = document.getElementById("top_nav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  window.onscroll = function() {
    var navbar2 = document.getElementById("top_nav");
    if (this.scrollY > 20) {
      navbar2.classList.add("scroll");
    } else {
      navbar2.classList.remove("scroll");
    }
  };
  return (
    <div className="header">
      <div className="topnav" id="top_nav">
        <a href="/">
          <img src={logosimawas} alt="logosimawas"/></a>
        <a href="#pricing">Peternakan</a>
        <a href="#features">Ketahanan Pangan</a>
        <a href="#services">Dataset</a>
        <a href="#about">Dashboard</a>
        <a href="#home" className="active">Beranda</a>
        <a href="#" className="icon" >
          <GiHamburgerMenu onClick={mobileNavBar}/>
        </a>
      </div>
    </div>
  )
}

export default Header
