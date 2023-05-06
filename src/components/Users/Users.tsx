import classes from "./Users.module.css";
import {UserType} from "../../redux/store";
import React from "react";
import {Preloader} from "../Preloader/Preloader";
import {User} from "./User";
import {UsersApi} from "../../api/api";
import {Paginator} from "../Paginator/Paginator";

type UsersPropsType = {
    totalUserCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (currentPage: number) => void
    users: UserType[]
    followingInProgress: Array<number>
    followUser:(id:number)=>void
    unFollowUser:(id:number)=>void
}

export const Users = (props: UsersPropsType) => {


    const follow = (id: number) => {
      props.followUser(id)
    }

    const unFollow = (id: number) => {
      props.unFollowUser(id)
    }


    return (
        <div>
            <div>
                {/*{props.isFetching && <Preloader/>}*/}
            </div>
         <Paginator totalUserCount={props.totalUserCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>

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