import "./App.css";
import TopBar from "./TopBar/TopBar";
import React from "react";
import Experience from "./Experience/Experience";
function App() {
  return (
    <div className="App">
      <TopBar />
      <h1 className="abt" id = "abtme">About Me</h1>
      <div id="about">
        <div className="box" id="box1">
          <p>
            I am a full stack developer with 3+ years of experience. I love
            coding in general and love working on new projects.
          </p>
        </div>
        <div className="box" id="box2">
          <p>
            I have worked on multiple projects and have experience in Python,
            C++, C, JavaScript, React, Node.js, and MongoDB.
          </p>
        </div>
      </div>
      <Experience/>
    </div>
  );
}

export default App;
