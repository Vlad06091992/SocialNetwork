import React from "react";
import "./Sidebar.css"

export const Sidebar:React.FC<TechnologiesPropsType> =(props)=>{
    return (
       <div className="Sidebar">
           <a href="#">Profile</a>
           <a href="#">Messges</a>
           <a href="#">News</a>
           <a href="#">Music</a>
           <a href="#">Settings</a>
       </div>
    )
}

type TechnologiesPropsType = {
    argument:any
}