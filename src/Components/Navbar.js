import React, { useState, useEffect } from 'react';
import Logo from '../img/Navbarlogo.png';
import './navbar.css';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0); // Initialize lastScrollY

  const handleHamburgerClick = () => {
    setShowNav(!showNav);
  };

  const handlePortfolioClick = () => {
    setShowNav(true);
  };

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY); // Update lastScrollY state
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${showNavbar ? 'show' : 'hide'}`}>
      <div className="left-side">
        <div className="navbar-brand">
          <img className="logo img-gradient" src={Logo} alt="Logo" />
          <a href="#" className="portfolio-name text-gradient" onClick={handlePortfolioClick}>
            Portfolio
          </a>
        </div>
        <button className="hamburger" onClick={handleHamburgerClick}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className="right-side">
        <div className="collapse navbar-collapse" style={{ display: showNav ? 'block' : 'none' }}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="#About" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link">Skills</a>
            </li>
            <li className="nav-item">
              <a href="#education" className="nav-link">Education</a>
            </li>
            <li className="nav-item">
              <a href="#experience" className="nav-link">Experience</a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link">Projects</a>
            </li>
            <li className="nav-item contact">
              <a href="mailto:shantanuchaudhari9221@gmail.com" className="button ">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
