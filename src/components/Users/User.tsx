import classes from "./Users.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type UsersPropsType = {
    ava:string | null
    followed:boolean
    id:number
    name:string
    status:string | null
    followUser:(id:number)=>void
    unFollowUser:(id:number)=>void
    followingInProgress:Array<number>


}


export const User = (props:UsersPropsType) => {
    return (
        <div className={classes.wrapper}>
            <div>
                <NavLink to={"/Profile/" + props.id}><img className={classes.ava}
                                                       src={props.ava
                                                           ? props.ava :
                                                           "https://ustanovkaos.ru/wp-content/uploads/2022/02/06-psevdo-pustaya-ava.jpg"}/>
                </NavLink>


                <button
                    disabled={props.followingInProgress.some(id=> id == props.id)}
                    onClick={() => props.followed ?
                        props.unFollowUser(props.id) :
                        props.followUser(props.id)}
                    className={classes.button}>{props.followed ? "UNFOLLOW" : "FOLLOW"}</button>
            </div>
            <div className={classes.main}>
                <div className={classes.column}>
                    <div>{props.name}</div>
                    <div>{props.status}</div>
                </div>
                <div className={classes.column}>
                    <div>location country</div>
                    <div>location city</div>
                </div>
            </div>
        </div>
    )

}


