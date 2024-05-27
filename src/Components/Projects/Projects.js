import React, {useState, useEffect} from "react";
import "./Projects.css";

function Projects(){
    const [clicked, setClicked] = useState(false);

    const handleOnClick = () => {
        setClicked(true);
    }

    
    return(
        <>
        <div id="projects">
            <div className="flex items-center justify-center mt-12">
                <h1 className="text-center w-full font-extrabold tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 text-warm_white">
                    Projects
                </h1>
            </div>
        </div>
        </>
    )
}

export default Projects;