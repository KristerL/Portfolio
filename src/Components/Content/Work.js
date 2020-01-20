import React from "react";

import classes from "./Content.module.css"

const Work = () => {
    return (
        <div className={classes.Content}>
            <h2>Currently:</h2>
            <ul>
                <li>Working as Junior Front-End Developer at REACH-U</li>
                <li>Sideprojects: Quote app, Finance tracker</li>
                <li>Learning: client side security</li>
            </ul>
            <h2>Past projects/hackathons</h2>
            <ul>
                <li>Garage 48 <a href={"http://garage48.org/blog/winners-of-garage48-spacetech-2019"}>Spacetech
                    hackathon</a> 1st place
                </li>
                <li>Find my projects and more at my <a href={"https://github.com/KristerL"}>github</a></li>
            </ul>
        </div>
    );
};

export default Work;