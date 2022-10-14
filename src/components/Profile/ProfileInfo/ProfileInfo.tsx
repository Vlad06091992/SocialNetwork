import React from "react";
import css from "./ProfileInfo.module.css";

type ProfileInfoType = {
    description:string
}

export const ProfileInfo:React.FC<ProfileInfoType> = (props) => {
    return(
        <div className={css.ProfileInfo}>
            <img src="https://i0.wp.com/engineswapdepot.com/wp-content/uploads/2021/06/BMW-130i-with-a-S65-V8-01.jpg?resize=930%2C620&ssl=1"/>
            <div className={css.description}>{props.description}</div>
        </div>
    )

}