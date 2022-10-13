import classes from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";



export const Profile:React.FC = (props) => {
    return(
        <div className={classes.Profile}>
            <img src="https://i0.wp.com/engineswapdepot.com/wp-content/uploads/2021/06/BMW-130i-with-a-S65-V8-01.jpg?resize=930%2C620&ssl=1"/>
            <div>Ava + Decription</div>
           <MyPosts/>

        </div>
    )
}