import css from "./Friend.module.css";
import {NavLink} from "react-router-dom";
import classes from "../../../Users/Users.module.css";
import React from "react";

type FriendPropsType = {
    name:string
    ava?:string | null
    id:number
}

export const Friend:React.FC<FriendPropsType> = (props) => {
    return(
        <div className={css.friend}>
            <NavLink to={"/Profile/" + props.id}><img className={css.ava} src={props.ava ? props.ava : "https://ustanovkaos.ru/wp-content/uploads/2022/02/06-psevdo-pustaya-ava.jpg"}/>
            </NavLink>




            <h3 className={css.h3}>{props.name}</h3>
        </div>
    )
}