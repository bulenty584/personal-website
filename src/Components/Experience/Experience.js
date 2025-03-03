import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function Experience() {
  
  return (
    <>
      <div id="exp">
        <div className="flex flex-col items-center justify-center mt-12">
          <div className="space-y-2 pb-8 pt-6 md:space-y-5" data-aos="fade-up" data-aos-duration="1000">
            <h1 className="text-center w-full font-extrabold tracking-tight text-4xl sm:leading-10 md:text-5xl md:leading-14 text-warm_white">
              Professional Experience
            </h1>
            <div className="flex flex-col lg:flex-row lg:space-x-20 justify-center items-center">
              <div className="mt-10 p-4 bg-black rounded-lg border-4 border-black shadow-[8px_8px_0px_grey] transition-transform transform-gpu hover:scale-106 transition-duration-300 w-1/2 md:w-1/2 lg:w-1/4">
                <h2 className="pr-10 pl-10 mt-8 mb-8 text-center text-2xl font-bold text-warm_white">
                  SWE Intern at 2Sigma School
                </h2>
                <p className="text-center text-lg text-gray-500 dark:text-gray-400 text-warm_white">
                  June 2024 - September 2024
                </p>
              </div>
              <p className="pr-10 pl-10 mt-10 text-center m-0 w-full sm:w-3/4 md:w-3/4 lg:w-1/2 text-lg text-gray-500 dark:text-gray-400 text-warm_white">
              Here I worked as a full stack engineer, contributing both JavaScript and Python code to backend and frontend development. During this time, I developed a browser-based Python IDE utilizing the Pyodide library and Worker API, enabling efficient code execution and rendering plots for graphical Python libraries. By leveraging web workers and a custom prototyped Virtual DOM, I was able to render graphical images in a background thread and increase the application's speed by 200%.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-20 justify-center items-center">
              <div className="w-1/2 mt-10 p-4 bg-black rounded-lg border-4 border-black shadow-[8px_8px_0px_grey] md:w-1/2 lg:w-1/4">
                <h2 className="mt-8 mb-8 text-center text-2xl font-bold text-warm_white">
                  Software Consultant at Kommu Inc.
                </h2>
                <p className="text-center text-lg text-gray-500 dark:text-gray-400 text-warm_white">
                  December 2023 - February 2024
                </p>
              </div>
              <p className="pr-10 pl-10 mt-10 text-center m-0 w-full sm:w-3/4 md:w-3/4 lg:w-1/2 text-lg text-gray-500 dark:text-gray-400 text-warm_white">
                Here I implemented user authentication and login for Kommu's web portal using Firebase and Node.js on the backend, with React.js on the frontend. I worked on phone number and email-password login. 
                I also developed phone number authentication for iOS using Swift and the ViewModel-Model (VMM) architecture and enhanced database efficiency, significantly reducing account retrieval time by 80%.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
