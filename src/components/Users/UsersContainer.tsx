import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {DispatchType, followUserAC, RootStateType, setUsersAC, unFollowUserAC, UserType} from "../../redux/store";

let mapStateToProps = (state: RootStateType) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        follow: (userId: number) => dispatch(followUserAC(userId)),
        unFollow: (userId: number) => dispatch(unFollowUserAC(userId)),
        setUsers: (users:UserType[]) => dispatch(setUsersAC(users))
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)