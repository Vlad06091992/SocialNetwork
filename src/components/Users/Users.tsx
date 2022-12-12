import React from "react";
import {UserType} from "../../redux/store";
import classes from "./Users.module.css"


type UsersPropsType = {
    users: UserType[]
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers:(users:UserType[])=>void
}


export const Users = (props: UsersPropsType) => {

    if(props.users.length === 0){
        props.setUsers([
            {
                id: 2, photo: 'https://i.pinimg.com/736x/2e/2e/21/2e2e2125ee53807c2d77b34773f84b5c.jpg',
                followed: false,
                fullname: 'Sueta',
                status: 'i am boss',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3, photo: 'https://i.pinimg.com/736x/2e/2e/21/2e2e2125ee53807c2d77b34773f84b5c.jpg',
                followed: true,
                fullname: 'Dmitriy',
                status: 'i am boss',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 4, photo: 'https://i.pinimg.com/736x/2e/2e/21/2e2e2125ee53807c2d77b34773f84b5c.jpg',
                followed: true,
                fullname: 'Max',
                status: 'i am boss',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 5, photo: 'https://i.pinimg.com/736x/2e/2e/21/2e2e2125ee53807c2d77b34773f84b5c.jpg',
                followed: false,
                fullname: 'Kolyan',
                status: 'i am boss',
                location: {city: 'Moscow', country: 'Russia'}
            }
        ])
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
                            <img className={classes.ava} src={el.photo}/>
                            <button
                                onClick={() => el.followed ?
                                    follow(el.id) :
                                    unFollow(el.id)}
                                className={classes.button}>{el.followed ? "UNFOLLOW" : "FOLLOW"}</button>
                        </div>
                        <div className={classes.main}>
                            <div className={classes.column}>
                                <div>{el.fullname}</div>
                                <div>{el.status}</div>
                            </div>
                            <div className={classes.column}>
                                <div>{el.location.country}</div>
                                <div>{el.location.city}</div>
                            </div>
                        </div>
                    </div>

                )

            })}
        </div>
    )
}