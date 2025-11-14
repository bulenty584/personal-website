import React, { useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import AOS from 'aos';

AOS.init({
    once: true,
});

function Projects() {
    const [activeCard, setActiveCard] = useState(null);

    const handleCardClick = (title) => {
        setActiveCard(title === activeCard ? null : title);
    };

    const projects = [
        { title: "BruinRide", description: "Bruin Ride is a ride-sharing platform that allows UCLA students to form rideshare groups! The app is built with React on the frontend, Node, Express, and Firebase on the backend. The rideshare algorithm is implemented on the cloud using Firebase's Firestore functionality.", 
        githubLink: "https://github.com/bulenty584/BruinRide" },
        { title: "PnetPhlix", description: "PnetPhlix is a movie recommender written in C++. The program uses a custom Tree data structure and custom iterator class to store the movies and their corresponding actors. A comparatibility algorithm is used to produce the final recommendations!", 
        githubLink: "https://github.com/bulenty584/PnetPhlix" },
        { title: "PeachParty", description: "PeachParty is a Mario Party spinoff game written in C++ using openGL. The game allows two players to move along 1 of 8 boards and interact with enemies.", 
        githubLink: "https://github.com/bulenty584/PeachParty" },
        { title: "Shufpy", description: "Shufpy is an implementation of the GNU 'shuf' command, but in Python!", 
        githubLink: "https://github.com/bulenty584/shufpy" },
    ];

    return (
        <>
        <div id ="projects" data-aos="fade-up"
                data-aos-duration="1000">
            <h1 id="projects-title" className="pt-10 flex flex-col items-center text-center w-full font-extrabold tracking-tight text-4xl sm:leading-10 md:text-5xl md:leading-14 text-warm_white">Projects</h1>
            <h2 className="pt-6 pb-6  text-center w-full font-semibold tracking-tight text-2xl sm:leading-10 md:text-2xl md:leading-14 text-warm_white">
                        <i>*Click on any image to learn more about the project! All github icons lead to the source code</i>
                    </h2>
            <div className="projects-container flex flex-wrap justify-center">
                {projects.map(project => (
                    <ProjectCard 
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        githubLink={project.githubLink}
                        isActive={activeCard === project.title ? true : (activeCard ? false : null)}
                        onCardClick={handleCardClick}
                    />
                ))}
            </div>
        </div>
        </>
    );
}

export default Projects;
