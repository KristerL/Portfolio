import React from "react";

import classes from "./Content.module.css"

const AboutMe = () =>{
    return(
      <div className={classes.Content}>
          <h2>Currently:</h2>
          <ul>
              <li>Working as a Junior Front-End Developer at Reach-U</li>
              <li>Studying Computer Science at The University of Tartu</li>
              <li>Reading books about finance, Stoic philosophy and psychology</li>
              <li>Interests: Programming, fitness, personal finance, travel, videography</li>
              <li>President of the Student Society of Mathematics and Informatics</li>
          </ul>
          <h2>Skills:</h2>
          <ul>
              <li>Java, Javascript, HTML, CSS </li>
              <li>React, Typescript, D3, Cesium</li>
              <li>SQL, Firebase</li>
              <li>GIT, UNIX, Docker, IntelliJ</li>
          </ul>
          <h2>Contact:</h2>
          <ul>
              <li>Looga.krister@gmail.com</li>
              <li><a href={"https://github.com/KristerL"}>https://github.com/KristerL</a></li>
              <li><a href={"https://www.linkedin.com/in/kristerlooga/"}>https://www.linkedin.com/in/kristerlooga/</a></li>
              <li>Tartu Estonia</li>
          </ul>
      </div>
    );
};

export default AboutMe;