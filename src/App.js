import "./App.css";
import TopBar from "./TopBar/TopBar";
import React from "react";
import Experience from "./Experience/Experience";
function App() {
  return (
    <div className="bg-">
      <TopBar />
      <h2 className="text-center flex justify-around" id = "abtme">About Me</h2>
      <div className = "column" id="about">
        <div className="box" id="box1">
          <p className="">
            I am a full stack developer with 3+ years of experience. I love
            coding in general and love working on new projects. I have worked on multiple projects and have experience in Python,
            C++, C, JavaScript, React, Node.js, and MongoDB.
          </p>
        </div>
      </div>
      <Experience/>
    </div>
  );
}

export default App;
