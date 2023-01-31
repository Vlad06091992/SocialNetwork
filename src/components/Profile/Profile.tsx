import classes from "./Profile.module.css"
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PresentationProfileType, ProfilePageType} from "../../redux/store";


export const Profile = (props: PresentationProfileType) => {
    console.log('rendering')
    return (
        <div className={classes.Profile}>
            <ProfileInfo aboutMe={props.aboutMe}
                         lookingForAJob={props.lookingForAJob}
                         fullName={props.fullName}
                         userId={props.userId}
                         photos={props.photos}
                         contacts={props.contacts}
                         lookingForAJobDescription={props.lookingForAJobDescription}
            />
            <hr/>
            <MyPostsContainer/>
        </div>
    )
}