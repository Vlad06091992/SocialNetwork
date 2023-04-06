import classes from "./Profile.module.css"
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePropsType} from "../../redux/store";
import {Redirect} from "react-router-dom";


export const Profile = (props: ProfilePropsType) => {
    console.log("render profile")

    return (
        <div className={classes.Profile}>
            <ProfileInfo aboutMe={props.aboutMe}
                         lookingForAJob={props.lookingForAJob}
                         fullName={props.fullName}
                         userId={props.userId}
                         photos={props.photos}
                         contacts={props.contacts}
                         lookingForAJobDescription={props.lookingForAJobDescription}
                         status={props.status}
                         updateStatus={props.updateStatus}

            />
            <hr/>
            <MyPostsContainer/>
        </div>
    )
}