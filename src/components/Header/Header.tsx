import React from "react";
import "./Header.css"
type HeaderPropsType = {
    argument:any
}

export const Header:React.FC<HeaderPropsType> =(props)=>{
    return (
        <div className="Header">
            <img  className="Logo" src="https://cdn.worldvectorlogo.com/logos/react-2.svg"/>
       <div className="Welcome">Welcome to my project</div>
        </div>
    )
}