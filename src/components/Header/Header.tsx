import React from "react";
import classes from "./Header.module.css"


export const Header:React.FC =(props)=>{
    return (
        <div className={classes.Header}>
            <img  className={classes.Logo} src="https://cdn.worldvectorlogo.com/logos/react-2.svg"/>
       <div className={classes.Welcome}>Welcome to my project</div>
        </div>
    )
}