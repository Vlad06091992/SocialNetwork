import React from "react";


export const Technologies:React.FC<TechnologiesPropsType> =(props)=>{
    return (
        <ul>
            <li>css</li>
            <li>js</li>
            <li>html</li>
            <li>react</li>
        </ul>
    )
}

type TechnologiesPropsType = {
    argument:any
}