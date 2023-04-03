import React from "react";
import {connect} from "react-redux";
import {RootStateType, UserType} from "../../redux/store";
import {Users} from "./Users";
import {getUsers} from "../../redux/profile-reducer";
import {followUser, unFollowUser} from "../../redux/users-reducer";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

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
    return {
        users: state.usersPage.users,
        totalUserCount: state.usersPage.totalUserCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export const UsersContainer = WithAuthRedirect(connect(mapStateToProps, {
    getUsers,
    followUser,
    unFollowUser
})(UsersApiComponent))