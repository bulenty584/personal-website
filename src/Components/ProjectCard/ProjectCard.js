import React, { useState } from "react";
import './ProjectCard.css';
import BruinRide from '../../Assets/BruinRide.png';
import PnetPhlix from '../../Assets/PnetPhlix.png';
import PeachParty from '../../Assets/PeachParty.png'



function ProjectCard(props){
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }

    let description = props.description;
    let title = props.title;

    const imgs = {
        "BruinRide" : BruinRide,
        "PnetPhlix" : PnetPhlix,
        "PeachParty": PeachParty
    }


    return (
        <>
        <div className="w-full flex flex-col items-center justify-center">
            <div className="space-y-2 pb-8 pt-6 md:space-y-5">
                    {clicked ? (
                        <div className="flex flex-col items-center justify-center">
                        <div 
                        id = "card" className="w-1/2 mt-10 p-4 bg-black rounded-lg border-4 border-black shadow-[8px_8px_0px_grey] transition-transform transform-gpu hover:scale-105 duration-300 ease-in-out"
                        onClick={handleClick}
                        >
                        <div className= "text-warm_white h-96 animate-fadeIn text-center text-3xl font-semibold"> {description} </div>
                        </div>
                        </div>
                    ) : (
                        <div 
                    id = "card" className="mt-10 p-4 bg-black rounded-lg border-4 border-black shadow-[8px_8px_0px_grey] transition-transform transform-gpu hover:scale-105 duration-300 ease-in-out"
                    onClick={handleClick}
                        >
                        <img src={imgs[title]} alt={title} className="h-96 rounded-lg animate-fadeIn "/>
                        </div>
                    )}
                    <p className="pt-3 text-center text-2xl font-semibold text-warm_white">{title}</p>
                </div>
            </div>
        </>
        )
}

export default ProjectCard;