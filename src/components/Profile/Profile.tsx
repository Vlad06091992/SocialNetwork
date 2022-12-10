import classes from "./Profile.module.css"
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import React, {ChangeEvent} from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {AddPostType, DispatchType, PostDataType, updateNewPostTextType} from "../../redux/store";
import {ReduxStoreType} from "../../redux/redux-store";

type ProfilePropsType = {
    store:ReduxStoreType
}

export const Profile = (props:ProfilePropsType) => {
    return(
        <div className={classes.Profile}>
          <ProfileInfo description={"Ava + description"}/>
           <MyPostsContainer
           // store={props.store}
           />
        </div>
    )
}