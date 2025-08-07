import "./App.css";
import TopBar from "./Components/TopBar/TopBar";
import React from "react";
import Experience from "./Components/Experience/Experience";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import Skills from "./Components/Skills/Skills";
import Projects  from "./Components/Projects/Projects";
function App() {
    return (
	<>
	    <div className="flex-col" id="top">
		<TopBar />
		<div className="main-content w-full flex flex-col items-center">
		    <h1 className="flex pt-28 pb-10 font-bold tracking-tight text-6xl md:text-7xl md:leading-14 text-warm_white" id="h1">
			Bulent Yesilyurt
		    </h1>
		    <h2 className="flex pb-10 font-semibold tracking-tight text-3xl sm:leading-10 md:text-3xl md:leading-14 text-warm_white" id="h2_descr">
			Adept and Passionate Software Developer
		    </h2>
		    <div className="flex flex-row space-x-4" id="symbols">
			<FaGithub className="link text-5xl text-warm_white hover:text-white-400 transition-transform transform-gpu hover:scale-105 transition-duration-300 shadow-md" onClick={() => window.open("https://github.com/bulenty584")}/>
			<FaLinkedin className="link text-5xl text-warm_white hover:text-white-400 transition-transform transform-gpu hover:scale-105 transition-duration-300 shadow-md" onClick={() => window.open("https://www.linkedin.com/in/bulent-yesilyurt-40614422b/")}/>
		    </div>
		    <hr className="mt-10 w-3/6 border-t-2 border-warm_white my-4" />
		    <h2

			className="flex pt-10 pb-10 font-extrabold tracking-tight text-4xl sm:leading-10 md:text-5xl md:leading-14 text-warm_white"
			id="abtme"
		    >
			About Me
		    </h2>
		    <div className="flex w-full sm:flex-row font-semibold tracking-tight sm:text-2xl sm:l1 text-warm_white pb-6" id="about">
			<div className="p-4 mx-auto w-1/4 min-w-[300px] bg-black rounded-lg border-4 border-black shadow-[8px_8px_0px_grey]" id="box1">
			    <p className="text-warm_white">
				I am a Software Engineer with 3 years of experience. I love
				coding, working on new projects, and just learning more about tech!
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
