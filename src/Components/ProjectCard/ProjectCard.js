import React, {useEffect, useState} from "react";
import './ProjectCard.css';
import bruin_ride from '../../Assets/bruin_ride.png';



function ProjectCard(props){
    const [clicked, setClicked] = useState(false);
    const [animation, setAnimation] = useState(' ');

    const handleClick = () => {
        setClicked(!clicked);
    }

    let description = props.description;
    let title = props.title;


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
                        <div className= "text-warm_white h-96 animate-fadeIn"> {description} </div>
                        </div>
                        </div>
                    ) : (
                        <div 
                    id = "card" className="mt-10 p-4 bg-black rounded-lg border-4 border-black shadow-[8px_8px_0px_grey] transition-transform transform-gpu hover:scale-105 duration-300 ease-in-out"
                    onClick={handleClick}
                >
                        <img src={bruin_ride} alt="Bruin Ride" className="w-full h-96 object-cover rounded-lg animate-fadeIn"/>
                        </div>
                    )}
                </div>
            </div>
        </>
        )
}

export default ProjectCard;