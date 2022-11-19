import css from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {AddPostType, DispatchType, PostDataType, updateNewPostTextType} from "../../../redux/state";
import React, {ChangeEvent, useState} from "react";
import {addPostAC} from "../../../redux/state";
import {updateNewPostTextAC} from "../../../redux/state";

type MyPostsPropsType = {
    dispatch: DispatchType
    postData: Array<PostDataType>
    newPostText: string

}


export const MyPosts = (props: MyPostsPropsType) => {
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const newPost = () => {
        if (newPostElement.current) {
            props.dispatch(addPostAC())
        }
    }

    const onPostChange = () => {
        let text = newPostElement.current?.value
        if(text){
            props.dispatch(updateNewPostTextAC(text))

        }
    }


    return (
        <div className={css.MyPosts}>
            <h3>My Posts</h3>
            <div>
                <textarea onChange={onPostChange}
                          ref={newPostElement}
                          value={props.newPostText}></textarea>
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