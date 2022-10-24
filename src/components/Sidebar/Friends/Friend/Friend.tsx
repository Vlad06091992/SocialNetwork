import css from "./Friend.module.css";

type FriendPropsType = {
    name:string
}

export const Friend:React.FC<FriendPropsType> = (props) => {
    return(
        <div className={css.friend}>
            <img className={css.ava} src="https://i.pinimg.com/originals/2a/e1/5b/2ae15b1e1cd8bd5dcb836b210b4e5cd2.jpg"/>
            <h3 className={css.h3}>{props.name}</h3>
        </div>
    )
}