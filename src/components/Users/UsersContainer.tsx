import React from "react";
import {connect} from "react-redux";
import {RootStateType, UserType} from "../../redux/store";
import {Users} from "./Users";

import {followUser, unFollowUser} from "../../redux/users-reducer";
import {
    followingInProgress,
    getCurrentPage,
    getPageSize,
    getSelectorUsersSuper,
    getTotalUserCount,
    isFetching
} from "../../redux/users-selectors";
import {requestUsers} from "../../redux/profile-reducer";

type UsersApiPropsType = {
    users: UserType[]
    totalUserCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
    getUsers: (pageSize?: number | undefined, currentPage?: number | undefined) => void
    followUser:(id:number)=>void
    unFollowUser:(id:number)=>void


}

class UsersApiComponent extends React.Component<UsersApiPropsType> {
    constructor(props: UsersApiPropsType) {
        super(props);
    }
    componentDidMount() {
        this.props.getUsers(this.props.pageSize)
    }

    onPageChanged = (currentPage: number) => {
        this.props.getUsers(this.props.pageSize, currentPage)
    }

    render() {
        console.log("render users")
        return (
            <Users
                   totalUserCount={this.props.totalUserCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   followingInProgress={this.props.followingInProgress}
                   followUser={this.props.followUser}
                   unFollowUser={this.props.unFollowUser}
            />

        );
    }
}



let mapStateToProps = (state: RootStateType) => {
    console.log("MSTP users")
    return {
        users: getSelectorUsersSuper(state),
        totalUserCount: getTotalUserCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: isFetching(state),
        followingInProgress: followingInProgress(state)
    }
}


// @ts-ignore
export const UsersContainer = connect(mapStateToProps, {
    getUsers: requestUsers,
    followUser,
    unFollowUser
})(UsersApiComponent)