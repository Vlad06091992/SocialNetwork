import React from "react";
import {addPostAC, DispatchType, RootStateType} from "../../../redux/store";
import {updateNewPostTextAC} from "../../../redux/store";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";



let mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profilePage.postData,
        newPostText:state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        addPost: () => dispatch(addPostAC()),
        onPostChange: (text: string | undefined) => {
            if (text) {
                dispatch(updateNewPostTextAC(text))
            }
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)