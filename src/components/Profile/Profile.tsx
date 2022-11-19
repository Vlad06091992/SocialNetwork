import classes from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import React, {ChangeEvent} from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {AddPostType, DispatchType, PostDataType, updateNewPostTextType} from "../../redux/state";

type ProfilePropsType = {
    postData:Array<PostDataType>
    dispatch:DispatchType
    newPostText:string
}

export const Profile = (props:ProfilePropsType) => {
    return(
        <div className={classes.Profile}>
          <ProfileInfo description={"Ava + description"}/>
           <MyPosts
               dispatch={props.dispatch}
               postData={props.postData}
               newPostText={props.newPostText}
           />
        </div>
    )
}