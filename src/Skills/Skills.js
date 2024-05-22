import React from "react";
import "./Skills.css";

function Skills() {
    return (
        <>
        <div className="flex items-center justify-center mt-12">
            <div className="space-y-2 pb-8 pt-6 md:space-y-5"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <h1 className="text-center w-full font-extrabold tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 text-warm_white"
                    id="skills"
                >
                    Skills
                </h1>
                <div className="box-border flex-row">
                    <div className="box-border flex flex-col items-center justify-center bg-black w-96">
                        <h2 className=" text-warm_white text-4xl"
                            id="skills"
                        >
                            Frontend
                        </h2>
                    </div>
                </div>
            </div>
        </div>
        </>
    )};


export default Skills;