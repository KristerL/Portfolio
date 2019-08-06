import React from "react"

import classes from "./ContentDisplay.module.css"
import AboutMe from "../../Components/Content/AboutMe"
import Work from "../../Components/Content/Work"


const ContentDisplay = (props) => {
    let content;
    switch (props.header) {
        case "About Me":
            content = <AboutMe/>;
            break;
        case "Work":
            content = <Work/>;
            break;
        default:
            content = <div><h1>KRISTER LOOGA</h1><h3>Junior Front-End Developer</h3></div>;
    }
    return (
        <div className={classes.ContentDisplay}>
            <h1 className={classes.Header}>{props.header}</h1>
            {content}
        </div>
    )
};

export default ContentDisplay;