import "./App.css";
import TopBar from "./TopBar/TopBar";
import React from "react";
import Experience from "./Experience/Experience";
function App() {
  return (
    <>
      <div className="bg-green-light shadow-lg flex-col pt-32 md:space-y-5">
        <TopBar />
        <div className="flex border-8 rounded-2xl font-bold" id="box1">
          <h2 className="px-5 text-3xl font-bold text-white" id="abtme">
            About Me
          </h2>
          <p className="h-screen pt-16">
            I am a full stack developer with 3+ years of experience. I love
            coding in general and love working on new projects. I have worked on
            multiple projects and have experience in Python, C++, C, JavaScript,
            React, Node.js, and MongoDB.
          </p>
        </div>
        <Experience />
      </div>
    </>
  );
}

export default App;
