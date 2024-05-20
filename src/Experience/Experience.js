import React, { useState } from "react";

function Experience() {
  return (
    <>
      <div className="experience-section w-full flex flex-col items-center">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1
            className="text-center w-full font-extrabold tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 text-warm_white"
            id="exp"
          >
            Professional Experience
          </h1>
          <h2 className="text-2xl font-bold leading-9 text-warm_white">
            Tailwind Wealth Management, LLC
          </h2>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400 text-warm_white">
            Full Stack Developer
          </p>
        </div>
      </div>
    </>
  );
}

export default Experience;
