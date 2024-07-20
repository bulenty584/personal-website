import React from "react";
import "./Projects.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import AOS from 'aos';

AOS.init();

function Projects(){
    
    return(
        <>
        <div id="projects">
            <div className=" items-center justify-center mt-12"
            data-aos="fade-up"
            data-aos-duration="1000"
            >
                <h1 className="text-center w-full font-extrabold tracking-tight text-4xl sm:leading-10 md:text-5xl md:leading-14 text-warm_white">
                    Projects
                </h1>
                <h2 className="pt-10 text-center w-full font-extrabold tracking-tight sm:text-1xl sm:leading-10 md:text-1xl md:leading-14 text-warm_white">
                    <i className="text-center">
                    *Click on any Image to learn more about the project!
                    </i>
                </h2>
                <ProjectCard title="BruinRide" 
                description="Bruin Ride is a ride-sharing platform that connects allows UCLA students to form rideshare groups! The app is built with React on the frontend, Node, Express, and Firebase on the backend. The rideshare algorithm is implemented on the cloud using Firebase's Firestore functionality."
                githubLink="https://github.com/bulenty584/BruinRide"
                />

                <ProjectCard title="PnetPhlix"
                description="PnetPhlix is a movie recommender written in C++. The program uses a custom Tree data structure and custom iterator class to store the movies and their corresponding actors. A comparatibility algorithm is used to produce the final recommendations!"
                githubLink="https://github.com/bulenty584/PnetPhlix"
                />

                <ProjectCard title="PeachParty"
                description="PeachParty is a Mario Party spinoff game written in C++ using openGL. The game allows two players to move along 1 of 8 boards and interact with enemies."
                githubLink="https://github.com/bulenty584/PeachParty"
                />
            </div>
        </div>
        </>
    )
}

export default Projects;