import React, {useState, useEffect} from "react";
import "./Projects.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import AOS from 'aos';

AOS.init();

function Projects(){
    const [clicked, setClicked] = useState(false);

    const handleOnClick = () => {
        setClicked(true);
    }

    
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
                <ProjectCard title="Bruin Ride" description="Bruin Ride is a ride-sharing platform that connects UCLA students with drivers who are willing to give rides to students. The platform is designed to be a safe and convenient way for students to get around campus and the surrounding area."/>
            </div>
        </div>
        </>
    )
}

export default Projects;