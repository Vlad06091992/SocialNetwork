import classes from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {AddPostType, PostDataType} from "../../redux/state";

type ProfilePropsType = {
    postData:Array<PostDataType>
    addPost:AddPostType
}

export const Profile = (props:ProfilePropsType) => {
    return(
        <div className={classes.Profile}>
          <ProfileInfo description={"Ava + description"}/>
           <MyPosts addPost={props.addPost} postData={props.postData}/>

        </div>
    )
}