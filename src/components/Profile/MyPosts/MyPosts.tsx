import css from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostDataType} from "../../../redux/state";
import {useState} from "react";

type MyPostsPropsType = {
    postData: Array<PostDataType>
}


export const MyPosts = (props: MyPostsPropsType) => {

    const onChangeHandler = (event: any) => {
        setTitle(event.currentTarget.value)
    }
    const onClickHandler = () => {
        let newPost = {message: title, likes: 0}
        setPosts([newPost, ...posts])
        setTitle('')
    }

    let [posts, setPosts] = useState(props.postData)
    let [title, setTitle] = useState('')

    return (
        <div className={css.MyPosts}>
            <h3>My Posts</h3>
            <div>
                <textarea value={title} onChange={onChangeHandler}></textarea>
            </div>
            <div>
                <button onClick={onClickHandler}>Add post</button>
            </div>
            <div className={css.posts}>
                {posts.map((p, i) => {
                    return (
                        <Post key={i} likes={p.likes} message={p.message}/>
                    )
                })}
            </div>

        </div>
    )
}