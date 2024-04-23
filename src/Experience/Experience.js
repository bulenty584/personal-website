import "./Experience.css";

import React, { useState } from "react";

function Experience() {
    const [dropDown, setdropDown] = useState(false);

    const handleClick = () => {
        setdropDown(!dropDown);
    };

    return (
        <div id = "exp">
            <h1>Experience</h1>
            <button onClick={handleClick}>Click</button>
            {dropDown && <p>Experience</p>}
        </div>
    );

}

export default Experience;