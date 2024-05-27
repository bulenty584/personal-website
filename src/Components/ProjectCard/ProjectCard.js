import React, {useEffect, useState} from "react";
import './ProjectCard.css';


function ProjectCard(props){
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
        console.log(clicked);
    }

    let description = props.description;
    let title = props.title;


    return (
        <>
        {clicked ? (
        <div className="box-border items-center">
            <div className="space-y-2 pb-8 pt-6 md:space-y-5">
                <div className="mt-10 p-4 bg-black rounded-lg border-4 
                border-black shadow-[8px_8px_0px_grey] transition-transform transform-gpu 
                hover:scale-105 transition-duration-300 w-1/4"
                onClick={handleClick}>
                </div>
            </div>
        </div>
        ) : (
            <div className="box-border items-center">
                <div className="space-y-2 pb-8 pt-6 md:space-y-5">
                    <div className="mt-10 p-4 bg-black rounded-lg border-4 
                    border-black shadow-[8px_8px_0px_grey] transition-transform transform-gpu 
                    hover:scale-105 transition-duration-300 w-1/4 text-warm_white"
                    onClick={handleClick}>
                        This is a project Card
                    </div>
                </div>
            </div>
        )}
        </>
        )
}

export default ProjectCard;