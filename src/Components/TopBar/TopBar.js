import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./TopBar.css";
import logo from "../../Assets/Logo.png";

function TopBar() {

  return (

    <header className="navHeader">
      <nav>
        <div className="bg-black text-warm_white flex items-center w-full h-1/12 box-border fixed justify-between z-10 top-0">
          <span className=" text-warm_white text-xl font-semibold font-sans pl-10 float-left h-1/12 box-border flex items-center justify-center">
            <NavLink to="/">Bulent Yesilyurt</NavLink>
            <img src={logo} alt="logo"/>
          </span>
          <div className="menu">
            <ul className="">
              <li className="font-semibold font-sans">
                <a className="mr-10 cool-underline" href="#exp">
                  Experience
                </a>
                <a className="mr-10 cool-underline" href="#skills">
                  Skills
                </a>
                <a className="mr-10 cool-underline" href="#projects">
                  Projects
                </a>
                <a
                  className="mr-10 cool-underline"
                  href="/BYResume2025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
