import "./Experience.css";

import React, { useState } from "react";

function Experience() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1
            className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
            id="exp"
          >
            Experience
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            I have worked on multiple projects and have experience in Python,
          </p>
        </div>
      </div>
    </>
  );
}

export default Experience;
