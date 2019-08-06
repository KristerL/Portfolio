import React, {useState} from "react"

import classes from "./LandingPage.module.css"
import ContentDisplay from "../ContentDisplay/ContentDisplay"
import Button from "../../Components/UI/Button/Button"

const LandingPage = () => {
    const [selectedHeader, setSelectedHeader] = useState(null);

    const handleSelect = (type) => {
        if (type === selectedHeader || type === "Homepage") {
            setSelectedHeader(null);
        } else {
            setSelectedHeader(type)
        }
    };

    return (
        <div className={classes.LandingPage}>
            <Button label={selectedHeader === "About Me" ? "Homepage" : "About Me"} select={handleSelect}/>
            <ContentDisplay header={selectedHeader}/>
            <Button label={selectedHeader === "Work" ? "Homepage" : "Work"} select={handleSelect}/>
        </div>
    )
};

export default LandingPage;