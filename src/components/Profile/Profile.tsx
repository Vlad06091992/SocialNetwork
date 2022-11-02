import classes from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import React, {ChangeEvent} from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {AddPostType, PostDataType,updateNewPostTextType} from "../../redux/state";

type ProfilePropsType = {
    postData:Array<PostDataType>
    addPost:AddPostType
    newPostText:string
    updateNewPostText:updateNewPostTextType

}

export const Profile = (props:ProfilePropsType) => {
    return(
        <div className={classes.Profile}>
          <ProfileInfo description={"Ava + description"}/>
           <MyPosts addPost={props.addPost}
                    postData={props.postData}
                    updateNewPostText={props.updateNewPostText}
                    newPostText={props.newPostText}/>
        </div>
    )
}