import React from "react";
import classes from "./Sidebar.module.css"

export const Sidebar:React.FC =(props)=>{
    return (
       <div className={classes.Sidebar}>
           <a href="src/components/Main/Sidebar/Sidebar#">Profile</a>
           <a href="src/components/Main/Sidebar/Sidebar#">Messges</a>
           <a href="src/components/Main/Sidebar/Sidebar#">News</a>
           <a href="src/components/Main/Sidebar/Sidebar#">Music</a>
           <a href="src/components/Main/Sidebar/Sidebar#">Settings</a>
       </div>
    )
}

