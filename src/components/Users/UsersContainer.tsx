import React from "react";
import {connect} from "react-redux";

import {
    DispatchType,
    followUserAC,
    RootStateType, setCurrentPageAC,
    setTotalcountAC,
    setUsersAC,
    unFollowUserAC,
    UserType
} from "../../redux/store";
import {UsersC} from "./UsersC";

let mapStateToProps = (state: RootStateType) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize:state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage

    }
}

let mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        follow: (userId: number) => dispatch(followUserAC(userId)),
        unFollow: (userId: number) => dispatch(unFollowUserAC(userId)),
        setUsers: (users:UserType[]) => dispatch(setUsersAC(users)),
        setTotalCount:(totalCount:number) => dispatch(setTotalcountAC(totalCount)),
        setCurrentPage:(currentPage:number) => dispatch(setCurrentPageAC(currentPage))
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)