import React from "react";
import {connect} from "react-redux";
import {
    follow, removeFollowingProgress,
    RootStateType, setCurrentPage, setFetching, setFollowingProgress,
    setTotalUserCount,
    setUsers,
    unFollow,
    UserType
} from "../../redux/store";
import axios from "axios";
import {Users} from "./Users";
import {UsersApi} from "../../api/api";

type UsersApiPropsType = {
    users: UserType[]
    totalUserCount: number
    pageSize: number
    currentPage: number
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setTotalUserCount: (totalCount: number) => void
    setCurrentPage: (currentPage: number) => void
    isFetching: boolean
    setFetching: (isFetching: boolean) => void
    setFollowingProgress: (id: number) => void
    removeFollowingProgress: (id: number) => void
    followingInProgress:Array<number>


}

class UsersApiComponent extends React.Component<UsersApiPropsType> {
    constructor(props: UsersApiPropsType) {
        super(props);
    }

    componentDidMount() {
        this.props.setFetching(true)
        UsersApi.getUsers(this.props.pageSize, this.props.currentPage)
            .then(response => {
                this.props.setFetching(false)
                this.props.setUsers(response.items)
                this.props.setTotalUserCount(response.totalCount)
            })
    }

    onPageChanged = (currentPage: number) => {
        this.props.setFetching(true)
        UsersApi.getUsers(this.props.pageSize, currentPage)
            .then(response => {
                this.props.setFetching(false)
                this.props.setUsers(response.items)
                this.props.setTotalUserCount(response.totalCount)
                this.props.setCurrentPage(currentPage)
            })
    }

    render() {
        return (
            <Users isFetching={this.props.isFetching}
                   totalUserCount={this.props.totalUserCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   users={this.props.users}
                   setFollowingProgress={this.props.setFollowingProgress}
                   removeFollowingProgress={this.props.removeFollowingProgress}
                   followingInProgress={this.props.followingInProgress}

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
        followingInProgress:state.usersPage.followingInProgress

    }
}


export const UsersContainer = connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setTotalUserCount,
    setCurrentPage,
    setFetching,
    setFollowingProgress,
    removeFollowingProgress,
})(UsersApiComponent)