import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./TopBar.css";

function TopBar() {
  return (
    <header className="navHeader">
      <nav>
        <div className="nav-bar">
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
                <a className="link">
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
