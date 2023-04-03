import css from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostDataType} from "../../../redux/store";
import React from "react";

import {useForm, SubmitHandler} from "react-hook-form";


type MyPostsPropsType = {
    posts: Array<PostDataType>
    addPost: (text: string) => void
}


type FormValues = {
    postText: string
};


export const MyPosts = (props: MyPostsPropsType) => {

    const {register, handleSubmit, formState: {errors}, reset} = useForm<FormValues>({

    });


    const onSubmit: SubmitHandler<any> = data => {
        props.addPost(data.postText)
        reset()
    };

    // const onSubmit: SubmitHandler<FormValues> = data => console.log(data);


    return (
        <div className={css.MyPosts}>
            <h3>My Posts</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <textarea  {...register("postText", {required: true})}  />
                <div>
                    <input type="submit"/>
                </div>
            </form>


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

