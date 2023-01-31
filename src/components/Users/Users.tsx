import classes from "./Users.module.css";
import {UserType} from "../../redux/store";
import React from "react";
import {Preloader} from "../Preloader/Preloader";
import {User} from "./User";
import {UsersApi} from "../../api/api";

type UsersPropsType = {
    totalUserCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (currentPage: number) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    users: UserType[]
    isFetching: boolean
    setFollowingProgress: (id: number) => void
    removeFollowingProgress: (id: number) => void
    followingInProgress: Array<number>

}

export const Users = (props: UsersPropsType) => {
    let numberOfPages = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= numberOfPages; i++) {
        pages.push(i)
    }

    const follow = (id: number) => {
        props.setFollowingProgress(id)
        console.log(props.followingInProgress)
        UsersApi.followUser(id)
            .then(data => {
                if (data.resultCode == 0) {
                    props.follow(id)
                }
                props.removeFollowingProgress(id)
            })

    }

    const unFollow = (id: number) => {
        props.setFollowingProgress(id)
        UsersApi.unFollowUser(id)
            .then(data => {
                if (data.resultCode == 0) {
                    props.unFollow(id)
                }
                props.removeFollowingProgress(id)
            })

    }


    return (
        <div>
            <div>
                {props.isFetching && <Preloader/>}
            </div>
            <div style={{maxWidth: '100%', margin: '10px', marginRight: '30px'}}>
                {pages.map(el => <span className={el === props.currentPage ? classes.bold : ""} key={el}
                                       onClick={() => props.onPageChanged(el)}>{el + ' '}</span>)}
            </div>

            {props.users.map((el: UserType, i: number) => {
                return (
                    <User key={i}
                          followingInProgress={props.followingInProgress}
                          ava={el.photos.small}
                          followed={el.followed}
                          id={el.id} name={el.name}
                          status={el.status}
                          followUser={follow}
                          unFollowUser={unFollow}/>
                )

            })}
        </div>
    );
}