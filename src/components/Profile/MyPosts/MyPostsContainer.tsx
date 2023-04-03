import React from "react";
import { RootStateType,} from "../../../redux/store";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {addPost} from "../../../redux/profile-reducer";
import {Dispatch} from "redux";


let mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profilePage.postData,

    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: (text:string) => dispatch(addPost(text)),
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)