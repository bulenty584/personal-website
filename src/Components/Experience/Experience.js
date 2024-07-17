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
              <div className="w-1/2 mt-10 p-4 bg-black rounded-lg border-4 border-black shadow-[8px_8px_0px_grey] md:w-1/2 lg:w-1/4">
                <h2 className="mt-8 mb-8 text-center text-2xl font-bold text-warm_white">
                  Software Consultant at Kommu Inc.
                </h2>
                <p className="text-center text-xl text-gray-500 dark:text-gray-400 text-warm_white">
                  December 2023 - February 2024
                </p>
              </div>
              <p className="pr-10 pl-10 mt-10 text-center m-0 w-full sm:w-1/2 md:w-1/2 lg:w-1/2 text-lg text-gray-500 dark:text-gray-400 text-warm_white">
                Here I implemented user authentication and login for Kommu's web portal using Firebase and Node.js on the backend, with React.js on the frontend. I worked on phone number and email-password login. 
                I also developed phone number authentication for iOS using Swift and the ViewModel-Model (VMM) architecture and enhanced database efficiency, significantly reducing account retrieval time by 80%.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-20 justify-center items-center">
              <div className="mt-10 p-4 bg-black rounded-lg border-4 border-black shadow-[8px_8px_0px_grey] transition-transform transform-gpu hover:scale-106 transition-duration-300 w-1/2 md:w-1/2 lg:w-1/4">
                <h2 className="pr-10 pl-10 mt-8 mb-8 text-center text-2xl font-bold text-warm_white">
                  AI/ML Solutions Intern at Tailwind Wealth Management, LLC
                </h2>
                <p className="text-center text-xl text-gray-500 dark:text-gray-400 text-warm_white">
                  June 2023 - August 2023
                </p>
              </div>
              <p className="mt-10 text-center m-0 w-full md:w-1/2 lg:w-1/2 text-lg text-gray-500 dark:text-gray-400 text-warm_white">
                Here I worked on finding use cases for Machine Learning models to improve the company's trading strategies. I also developed a trading algorithm that leveraged dynamic portfolio balancing using python (matplotlib, numpy, yfinance). I also developed detailed reports outlining methodologies, training scheme and model architecture of solutions and presented to company leaders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
