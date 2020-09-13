import React from "react";

import classes from "./Content.module.css"

const Work = () => {
    return (
        <div className={classes.Content}>
            <h2>Currently:</h2>
            <ul>
                <li>Working as a Software Developer at REACH-U</li>
            </ul>
            <h2>Past projects/hackathons</h2>
            <ul>
                <li>Find my projects and more at my <a href={"https://github.com/KristerL"}>github</a></li>
            </ul>
        </div>
    );
};

export default Work;