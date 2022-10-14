import classes from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";




export const Profile:React.FC = (props) => {
    return(
        <div className={classes.Profile}>
          <ProfileInfo description={"Ava + description"}/>
           <MyPosts/>

        </div>
    )
}