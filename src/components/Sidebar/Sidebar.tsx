import React from "react";
import classes from "./Sidebar.module.css"
import {NavLink} from "react-router-dom";
import {Friends} from "./Friends/Friends";
import {SidebarPageType} from "../../redux/store";

export type SidebarPropsType = {
    sidebarData:SidebarPageType
}

export const Sidebar: React.FC<SidebarPropsType> = (props) => {

    const active = (isActive:boolean) => isActive ? `${classes.active} ${classes.item}`: classes.item

    return (

        <div className={classes.Sidebar}>
            <NavLink className={active} to="/Profile">Profile</NavLink>
            <NavLink className={active} to="/DialogsContainer">Messages</NavLink>
            <NavLink className={active} to="/News">News</NavLink>
            <NavLink className={active} to="/Music">Music</NavLink>
            <NavLink className={active} to="/Settings">Settings</NavLink>
            <NavLink className={active} to="/Users">Users</NavLink>
            <Friends friends={props.sidebarData.friends}/>
        </div>

    )
}

