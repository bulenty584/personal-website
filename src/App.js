import "./App.css";
import TopBar from "./Components/TopBar/TopBar";
import React from "react";
import Experience from "./Components/Experience/Experience";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import Skills from "./Components/Skills/Skills";
import Projects  from "./Components/Projects/Projects";
import ProjectCard from "./Components/ProjectCard/ProjectCard"
function App() {
  return (
    <>
      <div className="flex-col">
        <TopBar />
        <div className="main-content w-full flex flex-col items-center">
          <h1 className="flex pt-28 pb-10 font-medium tracking-tight sm:text-5xl sm:leading-10 md:text-6xl md:leading-14 text-warm_white">
            Bulent Yesilyurt
          </h1>
          <h2 className="flex pb-10 font-semibold tracking-tight sm:text-2xl sm:leading-10 md:text-3xl md:leading-14 text-warm_white">
            Adept and Passionate Software Developer
          </h2>
          <div className="flex flex-row space-x-4">
          <FaGithub className="link text-5xl text-warm_white hover:text-white-400 transition-transform transform-gpu hover:scale-105 transition-duration-300 shadow-md" onClick={() => window.open("https://github.com/bulenty584")}/>
          <FaLinkedin className="link text-5xl text-warm_white hover:text-white-400 transition-transform transform-gpu hover:scale-105 transition-duration-300 shadow-md" onClick={() => window.open("https://www.linkedin.com/in/bulent-yesilyurt-40614422b/")}/>
          </div>
          <hr className="mt-10 w-3/6 border-t-2 border-warm_white my-4" />
        <h2
    
          className="flex pt-10 pb-10 font-extrabold tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 text-warm_white"
          id="abtme"
        >
          About Me
        </h2>
        <div className="flex w-full sm:flex-row font-semibold tracking-tight sm:text-2xl sm:l1 text-warm_white pb-6" id="about">
          <div className="p-4 mx-auto w-1/4 min-w-[300px] bg-black rounded-lg border-4 border-black shadow-[8px_8px_0px_grey]" id="box1">
            <p className="text-warm_white">
              I am a full stack engineer with 3 years of experience. I love
              coding in general and love working on new projects. I have worked
              on multiple projects and have experience in an assortment of technologies.
            </p>
          </div>
        </div>
        <Experience />
        </div>
        <Skills />
        <Projects />
      </div>
    </>
  );
}

export default App;
