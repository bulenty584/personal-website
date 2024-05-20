import React, { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function Experience() {
  return (
    <>
      <div className="experience-section w-full flex flex-col">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5"
        data-aos="fade-up"
        data-aos-duration="1000"
        >
          <h1
            className="text-center w-full font-extrabold tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 text-warm_white"
            id="exp"
          >
            Professional Experience
          </h1>
          <div className="ml-8 p-4 w-1/4 min-w-[300px] bg-black rounded-lg border-4 border-black shadow-[8px_8px_0px_grey] transition-transform transform-gpu hover:scale-105 transition-duration-300">
          <h2 className="text-left text-2xl font-bold l3 text-warm_white">
            Tailwind Wealth Management, LLC
          </h2>
          <p className="text-lg l0 text-gray-500 dark:text-gray-400 text-warm_white">
            Full Stack Developer
          </p>
          </div>
          <p className="text-lg l0 text-gray-500 dark:text-gray-400 text-warm_white">
            Full Stack Developer
          </p>
        </div>
      </div>
    </>
  );
}

export default Experience;
