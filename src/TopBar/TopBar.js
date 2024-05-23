import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./TopBar.css";
import logo from '../Assets/Logo.png';

function TopBar() {
  return (
    <header className="navHeader">
      <nav>
        <div className="nav-bar">
        <div className="w-1/12 object-fill scale-256">
          <img src={logo} alt="logo" className="object-fill" />
        </div>
          <span className="logoo navLogo">
            <NavLink to="/">Bulent Yesilyurt</NavLink>
          </span>
          <div className="menu">
            <ul className="nav-links">
              <li className="nav-item">
                <a className="link" href="#abtme">
                  About
                </a>
                <a className="link" href="#exp">
                  Experience
                </a>
                <a className="link" href="#skills">
                  Skills
                </a>
                <a href="/BYResume24.pdf" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default TopBar;
