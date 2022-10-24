import React from "react";
import classes from "./Sidebar.module.css"
import {NavLink} from "react-router-dom";
import {Router} from "react-router-dom";
import {Route} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import {Friends} from "./Friends/Friends";
import {FriendType, SidebarPageType} from "../../redux/state";

export type SidebarPropsType = {
    sidebarData:SidebarPageType
}

export const Sidebar: React.FC<SidebarPropsType> = (props) => {

    const active = (isActive:boolean) => isActive ? classes.active : classes.item

    return (

        <div className={classes.Sidebar}>
            <NavLink className={active} to="/Profile">Profile</NavLink>
            <NavLink className={active} to="/Dialogs">Messages</NavLink>
            <NavLink className={active} to="/News">News</NavLink>
            <NavLink className={active} to="/Music">Music</NavLink>
            <NavLink className={active} to="/Settings">Settings</NavLink>
            <Friends friends={props.sidebarData.friends}/>
        </div>

    )
}

