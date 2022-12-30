import React from "react";
import {UserType} from "../../redux/store";
import classes from "./Users.module.css"
import axios from "axios";


type UsersPropsType = {
    users: UserType[]
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
}


export const Users = (props: UsersPropsType) => {

    console.log("rendering users")
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                console.log(response)
                props.setUsers(response.data.items)
            })
    }


    const follow = (userId: number) => {
        props.follow(userId)
    }

    const unFollow = (userId: number) => {
        props.unFollow(userId)
    }

    return (
        <div>
            {props.users.map((el, i) => {

                return (
                    <div key={i} className={classes.wrapper}>
                        <div>
                            <img className={classes.ava}
                                 src={el.photos.small ? el.photos.small : "https://shapka-youtube.ru/wp-content/uploads/2022/06/ava-kot-iz-shreka.jpg"}/>
                            <button
                                onClick={() => el.followed ?
                                    follow(el.id) :
                                    unFollow(el.id)}
                                className={classes.button}>{el.followed ? "UNFOLLOW" : "FOLLOW"}</button>
                        </div>
                        <div className={classes.main}>
                            <div className={classes.column}>
                                <div>{el.name}</div>
                                <div>{el.status}</div>
                            </div>
                            <div className={classes.column}>
                                <div>location country</div>
                                <div>location city</div>
                            </div>
                        </div>
                    </div>

                )

            })}
        </div>
    )
}