import "./MyPosts.css"
import {Post} from "./Post/Post";


export const MyPosts: React.FC = (props) => {
    return (
        <div className="MyPosts">
            <div>My Posts</div>
            <textarea></textarea>
            <button>Add post</button>
            <Post message={"First post!!!!!"}/>
            <Post message={"Second post!!!!!!!"}/>
        </div>
    )
}