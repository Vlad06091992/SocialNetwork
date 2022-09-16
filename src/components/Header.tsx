import React from "react";

type HeaderPropsType = {
    argument:any
}

export const Header:React.FC<HeaderPropsType> =(props)=>{
    return (
        <div>
            <a href="#">Home </a>
            <a href="#">New feed </a>
            <a href="#">Messages </a>
        </div>
    )
}