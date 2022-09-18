import "./Post.css"

type PostPropsType = {
    message:string
}

export const Post:React.FC<PostPropsType> = (props) => {
    return(
        <div className="Post">

                <img src ="https://i.pinimg.com/originals/2a/e1/5b/2ae15b1e1cd8bd5dcb836b210b4e5cd2.jpg"/>
            {props.message}

            <div className="Like">Like</div>
        </div>

    )
}