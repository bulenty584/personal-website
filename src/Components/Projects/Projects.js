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
                <h1 className="text-center w-full font-extrabold tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 text-warm_white">
                    Projects
                </h1>
                <h2 className="pt-10 text-center w-full font-extrabold tracking-tight sm:text-1xl sm:leading-10 md:text-1xl md:leading-14 text-warm_white">
                    <i className="text-center">
                    *Click on any Image to learn more about the project!
                    </i>
                </h2>
                <ProjectCard title="BruinRide" 
                description="Bruin Ride is a ride-sharing platform that connects UCLA students with drivers who are willing to give rides to students. 
                The app is built with React, Node, Express, and Firebase on the backend. The rideshare algorithm is implemented on the cloud using Firebase's Firestore functionality."
                />

                <ProjectCard title="PnetPhlix"
                description="PnetPhlix is a movie recommender written in C++. The program uses a custom Tree data structure and iterator class to store the movies and their corresponding actors."
                />
            </div>
        </div>
        </>
    )
}

export default Projects;