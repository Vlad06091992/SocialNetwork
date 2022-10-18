import classes from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostDataType} from "../../index";

type ProfilePropsType = {
    postData:Array<PostDataType>
}

export const Profile = (props:ProfilePropsType) => {
    return(
        <div className={classes.Profile}>
          <ProfileInfo description={"Ava + description"}/>
           <MyPosts postData={props.postData}/>

        </div>
    )
}