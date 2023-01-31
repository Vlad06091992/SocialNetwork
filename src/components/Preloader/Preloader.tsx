import classes from "./Preloader.module.css";
import preloader from "../../images/Spin-1s-200px.svg";
import React from "react";

export const Preloader = () => {
    return(
        <img className={classes.Preloader} src={preloader}></img>
    )
}