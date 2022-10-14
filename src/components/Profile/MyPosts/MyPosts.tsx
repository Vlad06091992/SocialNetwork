import css from "./MyPosts.module.css"
import {Post} from "./Post/Post";


export const MyPosts: React.FC = (props) => {
    return (
        <div className={css.MyPosts}>
            <h3>My Posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={css.posts}>
                <Post likes={15} message={"First post!!!!!"}/>
                <Post likes={20} message={"Second post!!!!!!!"}/>
            </div>

        </div>
    )
}