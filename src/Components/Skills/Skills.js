import React from "react";
import "./Skills.css";

const ret_html = (props) => {
    let id = props.id;
    return (
    <div class="mx-auto box-border w-5/6 bg-gray rounded-lg border-4 border-white">
                    <div class="p-4 bg-black rounded-lg max-h-full text-warm_white font-semibold text-3xl" style={{width: "100%"}}> {id} </div>
                </div>
    )
}


function Skills() {
    return (
        <>
        <div id="skills">
        <div className="flex mt-12">
            <div className="space-y-2 pb-8 pt-6 md:space-y-5 items-center justify-center w-full"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <h1 className="text-center w-full font-extrabold tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 text-warm_white">
                    Skills
                </h1>
                <h2 className="pt-6 pb-6  text-center w-full font-semibold tracking-tight sm:text-3xl sm:leading-10 md:text-4xl md:leading-14 text-warm_white">
                    Languages
                </h2>
                <div class="mx-auto box-border w-5/6 bg-gray rounded-lg border-4 border-white">
                    <div class="p-4 bg-black rounded-lg max-h-full text-warm_white font-semibold text-3xl" style={{width: "100%"}}> C++ </div>
                </div>
                <div class="mx-auto box-border w-5/6 bg-gray rounded-lg border-4 border-white">
                    <div class="p-4 bg-black rounded-lg max-h-full text-warm_white font-semibold text-3xl" style={{width: "80%"}}> Python </div>
                </div>
                <div class="mx-auto box-border w-5/6 bg-gray rounded-lg border-4 border-white">
                    <div class="p-4 bg-black rounded-lg max-h-full text-warm_white font-semibold text-3xl" style={{width: "80%"}}> JavaScript </div>
                </div>
                <div class="mx-auto box-border w-5/6 bg-gray rounded-lg border-4 border-white">
                    <div class="p-4 bg-black rounded-lg max-h-full text-warm_white font-semibold text-3xl" style={{width: "100%"}}> HTML + CSS </div>
                </div>
                <div class="mx-auto box-border w-5/6 bg-gray rounded-lg border-4 border-white">
                    <div class="p-4 bg-black rounded-lg max-h-full text-warm_white font-semibold text-3xl" style={{width: "90%"}}> Swift </div>
                </div>
                <div class="mx-auto box-border w-5/6 bg-gray rounded-lg border-4 border-white">
                    <div class="p-4 bg-black rounded-lg max-h-full text-warm_white font-semibold text-3xl" style={{width: "60%"}}> C </div>
                </div>
                <div class="mx-auto box-border w-5/6 bg-gray rounded-lg border-4 border-white">
                    <div class="p-4 bg-black rounded-lg max-h-full text-warm_white font-semibold text-3xl" style={{width: "60%"}}> Lisp </div>
                </div>
                <div class="mx-auto box-border w-5/6 bg-gray rounded-lg border-4 border-white">
                    <div class="p-4 bg-black rounded-lg max-h-full text-warm_white font-semibold text-3xl" style={{width: "40%"}}> SQL </div>
                </div>

                <h2 className="pt-10 pb-6  text-center w-full font-semibold tracking-tight sm:text-3xl sm:leading-10 md:text-4xl md:leading-14 text-warm_white">
                    Technologies
                </h2>
                <div class="mx-auto box-border w-5/6 bg-gray rounded-lg border-4 border-white">
                    <div class="p-4 bg-black rounded-lg max-h-full text-warm_white font-semibold text-3xl" style={{width: "100%"}}> Git </div>
                </div>
                <div class="mx-auto box-border w-5/6 bg-gray rounded-lg border-4 border-white">
                    <div class="p-4 bg-black rounded-lg max-h-full text-warm_white font-semibold text-3xl" style={{width: "100%"}}> React.js/Node.js </div>
                </div>
                <div class="mx-auto box-border w-5/6 bg-gray rounded-lg border-4 border-white">
                    <div class="p-4 bg-black rounded-lg max-h-full text-warm_white font-semibold text-3xl" style={{width: "80%"}}> Emacs </div>
                </div>
                <div class="mx-auto box-border w-5/6 bg-gray rounded-lg border-4 border-white">
                    <div class="p-4 bg-black rounded-lg max-h-full text-warm_white font-semibold text-3xl" style={{width: "80%"}}>  Linux </div>
                </div>
                <div class="mx-auto box-border w-5/6 bg-gray rounded-lg border-4 border-white">
                    <div class="p-4 bg-black rounded-lg max-h-full text-warm_white font-semibold text-3xl" style={{width: "80%"}}>  GDB/Valgrind </div>
                </div>
            </div>
        </div>
        </div>

        </>
    )};


export default Skills;