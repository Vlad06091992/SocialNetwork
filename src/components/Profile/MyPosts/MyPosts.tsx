import classes from "./MyPosts.module.css"
import {Post} from "./Post/Post";


export const MyPosts: React.FC = (props) => {
    return (
        <div className="MyPosts">
            <div>My Posts</div>
            <textarea></textarea>
            <button>Add post</button>
            <Post likes={15} message={"First post!!!!!"}/>
            <Post likes={20} message={"Second post!!!!!!!"}/>
        </div>
    )
}