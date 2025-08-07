import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./TopBar.css";
import logo from "../../Assets/Logo.png";

function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="navHeader">
      <nav>
        <div className="bg-black text-warm_white flex items-center w-full h-1/12 box-border fixed justify-between z-20 top-0">
          <span className="pl-10 text-warm_white text-xl font-semibold font-sans flex items-center">
            <a href="#top">Bulent Yesilyurt</a>
            <img src={logo} alt="logo"/>
          </span>
          <div className="hidden md:flex space-x-4">
            <ul className="flex space-x-4">
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
                  href="/BYResume2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
          <div className="md:hidden pr-10">
            <div id="hamburger" className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div id="mobile-menu" className={`md:hidden fixed text-warm_white w-full bg-black p-.5 border-white font-sans font-semibold pt-14 z-10 ${menuOpen ? 'open' : ''}`}>
          <div className={'flex flex-col items-center justify-center' }>
            <a href="#exp" className=" text-lg py-2 cool-underline">
              Experience
            </a>
            <a href="#skills" className=" px-4 py-2 text-lg cool-underline">
              Skills
            </a>
            <a href="#projects" className=" px-4 py-2 text-lg cool-underline">
              Projects
            </a>
            <a
              href="/BYResume2025.pdf"
              className="px-4 py-2 text-lg cool-underline"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default TopBar;
