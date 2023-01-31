import React from "react";
import {
    addPost,
    DispatchType,
    RootStateType,
    setAboutMe,
    setContacts,
    setFullName,
    setLookingForAJob, setLookingForAJobDescription, setPhotos, setUserId
} from "../../../redux/store";
import {updateNewPostText} from "../../../redux/store";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profilePage.postData,
        newPostText: state.profilePage.newPostText,

    }
}
let mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        addPost: () => dispatch(addPost()),
        updateNewPostText: (text: string | undefined) => {
            if (text) {
                dispatch(updateNewPostText(text))
            }
        },

    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)