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
            <ContentDisplay header={selectedHeader}/>
        </div>
    )
};

export default LandingPage;