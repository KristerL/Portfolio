import React from "react"

import classes from "./ContentDisplay.module.css"
import AboutMe from "../../Components/Content/AboutMe"
import Work from "../../Components/Content/Work"

import {faEnvelope,} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";


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
            content = <div>
                <h1>KRISTER LOOGA</h1>
                <h3>Junior Front-End Developer</h3>
                <div className={"test"}>
                    <a href={"mailto:looga.krister@gmail.com"} aria-label={"Email address"} target={"_blank"}
                       rel={"noopener"}> <FontAwesomeIcon icon={faEnvelope}/></a>
                    <a href={"https://www.linkedin.com/in/kristerlooga/"} aria-label={"Linkedin address"}
                       target={"_blank"} rel={"noopener"}><FontAwesomeIcon icon={faLinkedin}/></a>
                    <a href={"https://github.com/KristerL"} aria-label={"Github address"} target={"_blank"}
                       rel={"noopener"}><FontAwesomeIcon icon={faGithub}/></a>

                </div>
            </div>;
    }
    return (
        <div className={classes.ContentDisplay}>
            <h1 className={classes.Header}>{props.header}</h1>
            {content}

        </div>
    )
};

export default ContentDisplay;