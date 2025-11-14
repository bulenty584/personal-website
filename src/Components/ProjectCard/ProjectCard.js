import React, { useState } from "react";
<<<<<<< HEAD
import './ProjectCard.css';
import BruinRide from '../../Assets/BruinRide.png';
import PnetPhlix from '../../Assets/PnetPhlix.png';
import PeachParty from '../../Assets/PeachParty.png';
import shufpy from '../../Assets/shufpy.gif';
import { FaGithub } from "react-icons/fa";

function ProjectCard(props) {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }

    const { description, title, githubLink } = props;

    const imgs = {
        "BruinRide": BruinRide,
        "PnetPhlix": PnetPhlix,
        "PeachParty": PeachParty,
        "Shufpy": shufpy
    };

=======
import "./ProjectCard.css";
import BruinRide from "../../Assets/BruinRide.png";
import PnetPhlix from "../../Assets/PnetPhlix.png";
import PeachParty from "../../Assets/PeachParty.png";
import shufpy from "../../Assets/shufpy.gif";
import { FaGithub } from "react-icons/fa";

const IMAGE_MAP = {
    BruinRide,
    PnetPhlix,
    PeachParty,
    Shufpy: shufpy,
};

function ProjectCard({ description, title, githubLink }) {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked((prev) => !prev);
    };

    const projectImage = IMAGE_MAP[title];

>>>>>>> 8137899 (new migration to newer packages and more updated cra build)
    return (
        <>
            {clicked && <div className="backdrop" onClick={handleClick}></div>}
            <div 
                className={`project-card w-80 m-4 items-center justify-center ${clicked ? 'active' : ''}`}
                onClick={handleClick}
            >
                {clicked ? (
                    <div 
                        id="card" 
                        className="card-content p-4 bg-black rounded-lg border-4 border-black shadow-[8px_8px_0px_grey]"
                    >
                        <div 
                            className={`text-warm_white h-48 ${clicked ? 'fade-in' : ''} text-center lg:text-md md:text-1xl font-semibold`}
                        >
                            {description}
                        </div>
                    </div>
                ) : (
                    <div 
                        id="card" 
                        className="card-content p-4 bg-black rounded-lg border-4 border-black shadow-[8px_8px_0px_grey]"
                    >
<<<<<<< HEAD
                        <img 
                            src={imgs[title]} 
                            alt={title} 
                            className={`h-48 w-full object-cover lg:rounded ${clicked ? 'fade-in' : ''}`} 
=======
                        <img
                            src={projectImage}
                            alt={title}
                            loading="lazy"
                            decoding="async"
                            width={320}
                            height={192}
                            sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 80vw"
                            className={`h-48 w-full object-cover lg:rounded ${clicked ? "fade-in" : ""}`}
>>>>>>> 8137899 (new migration to newer packages and more updated cra build)
                        />
                    </div>
                )}
                <div className="flex flex-row justify-center items-center mt-4">
                    <p className="text-center lg:text-2xl md:text-2xl font-semibold text-warm_white">
                        {title}
                    </p>
                    {githubLink && (
                        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="ml-3">
                            <FaGithub className="text-warm_white text-2xl" />
                        </a>
                    )}
                </div>
            </div>
        </>
    );
}

export default ProjectCard;
