import React from "react";

import DrawerToggle from "../DrawerToggle/DrawerToggle"

import styles from "./toolbar.module.css"

const toolbar = () => {
    return (
        <div className={styles.Toolbar}>
            <header className={styles.Toolbar}>
                <h1><strong>KRISTER LOOGA</strong></h1>
                <DrawerToggle/>
            </header>
        </div>
    );
};

export default toolbar;