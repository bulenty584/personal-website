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
          className="flex pt-20 font-extrabold tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14"
          id="abtme"
        >
          About Me
        </h2>
        <div className="flex w-full sm:flex-row font-semibold tracking-tight sm:text-2xl sm:l1" id="about">
          <div className="flex w-full" id="box1">
            <p className="pt-10">
              I am a full stack developer with 3+ years of experience. I love
              coding in general and love working on new projects. I have worked
              on multiple projects and have experience in Python, C++, C,
              JavaScript, React, Node.js, and MongoDB.
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
