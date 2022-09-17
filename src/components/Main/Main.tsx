import React from "react";
import "./Main.css"
import {Sidebar} from "../Sidebar/Sidebar";
import {Content} from "../Content/Content";


export const Main: React.FC<MainPropsType> = (props) => {
    return (
        <div className="Main">
            <Sidebar argument={1}/>
            <Sidebar argument={1}/>
            <Content arguments={1}/>
        </div>
    )
}

type MainPropsType = {
    argument: any
}