import css from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {AddPostType, PostDataType, updateNewPostTextType} from "../../../redux/state";
import React, {ChangeEvent, useState} from "react";

type MyPostsPropsType = {
    postData: Array<PostDataType>
    addPost: AddPostType
    newPostText: string
    updateNewPostText: updateNewPostTextType
}


export const MyPosts = (props: MyPostsPropsType) => {
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    const newPost = () => {
        if (newPostElement.current) {
            // let post = newPostElement.current?.value
            let post = props.newPostText
            props.addPost()
            // newPostElement.current.value = ''
        }
    }
    return (
        <div className={css.MyPosts}>
            <h3>My Posts</h3>
            <div>
                <textarea onChange={props.updateNewPostText} ref={newPostElement} value={props.newPostText}></textarea>
            </div>
            <div>
                <button onClick={newPost}>Add post</button>
            </div>
            <div className={css.posts}>
                {props.postData.map((p, i) => {
                    return (
                        <Post key={i} likes={p.likes} message={p.message}/>
                    )
                })}
            </div>

        </div>
    )
}