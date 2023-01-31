import React from "react";
import css from "./ProfileInfo.module.css";
import {PresentationProfileType} from "../../../redux/store";

// type ProfileInfoType = {
//     description:string
// }

export const ProfileInfo:React.FC<PresentationProfileType> = (props) => {
    return(
        <div className={css.ProfileInfo}>
            <img src={props.photos.large}/>
            <div className={css.description}>this props</div>
        <p>{props.aboutMe}</p>
        <p>{props.userId}</p>
        <p>{props.fullName}</p>
        <a href={props.contacts.vk}>My vk</a>
        <a href={props.contacts.twitter}>My twitter</a>
        <p>{props.lookingForAJobDescription}</p>
        <p>{props.lookingForAJob}</p>

        </div>
    )

}