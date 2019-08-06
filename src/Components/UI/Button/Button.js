import React from "react";

import classes from "./Button.module.css"

const Button = (props) => {

    const handleClick = () => {
        props.select(props.label)
    };
    return (
        <button className={classes.Button} onClick={handleClick}>{props.label}</button>
    )
};

export default Button;