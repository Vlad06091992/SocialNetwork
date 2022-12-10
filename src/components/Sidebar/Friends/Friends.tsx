import React from "react";
import {Friend} from "./Friend/Friend";
import css from "./Friends.module.css";
import exp from "constants";
import {FriendType} from "../../../redux/store";
export type FriendsType = {
    friends:Array<FriendType>
}

export const Friends:React.FC<FriendsType> = (props) => {



    return(
        <div className={css.friends}>
            <h3 className={css.h3}>Friends</h3>
            <div className={css.friendsWrapper}>
                {props.friends.map((f,i)=>{
                    return(
                        <Friend key={i} name={f.name}/>
                    )
                })}

            </div>
        </div>
    )
}