import "./App.css";
import TopBar from "./TopBar/TopBar";
import React from "react";
import Experience from "./Experience/Experience";
function App() {
  return (
    <>
      <div className="flex-col">
        <TopBar />
        <div className="main-content w-full flex flex-col items-center">
        <h2
          className="flex pt-28 pb-10 font-extrabold tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 text-warm_white"
          id="abtme"
        >
          About Me
        </h2>
        <div className="flex w-full sm:flex-row font-semibold tracking-tight sm:text-2xl sm:l1 text-warm_white pb-10" id="about">
          <div className="p-4 mx-auto w-1/4 min-w-[300px] bg-black rounded-lg border-4 border-black shadow-[8px_8px_0px_grey] transition-transform transform-gpu hover:scale-105 transition-duration-300" id="box1">
            <p className="text-warm_white">
              I am a full stack engineer with 3 years of experience. I love
              coding in general and love working on new projects. I have worked
              on multiple projects and have experience in an assortment of technologies.
            </p>
          </div>
        </div>
        <Experience />
        </div>
      </div>
    </>
  );
}

export default App;
