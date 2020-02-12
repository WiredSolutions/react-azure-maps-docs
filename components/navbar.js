import React from 'react'
import logo from "../assets/wired-logo.png"
import "../styles/navbar.scss"


const Navbar = () => (
  <header className="navbar">
    <img src={logo} alt="logo" />
    <h4>React Azure Maps</h4>
  </header>
)

export default Navbar
