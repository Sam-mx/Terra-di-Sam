import React from 'react'
import './Header.css';
import logo from '../../assets/logo.svg';
import hamburger from "../../assets/hamburger.svg"

const navLinks = [{ label: 'Home', href: '/' }];


const Header = () => {
  return (
    <header className="nav-header">
    <nav className="nav-container">
      <a href="/" className="nav-logo">
        <img
          src={logo}
          alt="logo"
          width={129}
          height={29}
          className="logo-image"
        />
      </a>
      <ul className="nav-list">
        {navLinks.map((item) => (
          <li key={item.label} className="nav-item">
            <a href={item.href} className="nav-link">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="nav-hamburger">
        <img src={hamburger} alt="hamburger menu" width={25} height={25} />
      </div>
    </nav>
  </header>
  )
}

export default Header