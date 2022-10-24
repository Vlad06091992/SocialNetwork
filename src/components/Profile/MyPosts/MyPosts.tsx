import css from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {AddPostType, PostDataType} from "../../../redux/state";
import React, {useState} from "react";

type MyPostsPropsType = {
    postData: Array<PostDataType>
    addPost:AddPostType
}


export const MyPosts = (props: MyPostsPropsType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>()
const newPost = () => {
        let post = newPostElement.current?.value
        if(post){
            props.addPost(post)
        }

}
    return (
        <div className={css.MyPosts}>
            <h3>My Posts</h3>
            <div>
                <textarea ref={newPostElement} ></textarea>
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