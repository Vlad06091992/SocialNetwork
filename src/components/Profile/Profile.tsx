import classes from "./Profile.module.css"
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ReduxStoreType} from "../../redux/redux-store";

type ProfilePropsType = {
    store:ReduxStoreType
}

export const Profile = (props:ProfilePropsType) => {
    return(
        <div className={classes.Profile}>
          <ProfileInfo description={"Ava + description"}/>
           <MyPostsContainer/>
        </div>
    )
}