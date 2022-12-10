import css from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {AddPostType, DispatchType, PostDataType, updateNewPostTextType} from "../../../redux/store";
import React, {ChangeEvent, useState} from "react";
import {addPostAC} from "../../../redux/store";
import {updateNewPostTextAC} from "../../../redux/store";

type MyPostsPropsType = {
    posts: Array<PostDataType>
    onPostChange: (text: string | undefined) => void
    addPost: () => void
    newPostText:string
}


export const MyPosts = (props: MyPostsPropsType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const onAddPost = () => {
        props.addPost()
    }

    const onPostChange = () =>{
        props.onPostChange(newPostElement.current?.value)
    }

    return (
        <div className={css.MyPosts}>
            <h3>My Posts</h3>
            <div>
                <textarea ref={newPostElement}
                          onChange={onPostChange}
                value={props.newPostText}></textarea>
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={css.posts}>
                {props.posts.map((p, i) => {
                    return (
                        <Post key={i} likes={p.likes} message={p.message}/>
                    )
                })}
            </div>

        </div>
    )
}

