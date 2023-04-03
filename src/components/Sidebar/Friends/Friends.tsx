import React from "react";
import {Friend} from "./Friend/Friend";
import css from "./Friends.module.css";
import exp from "constants";
import {FriendType, RootStateType, UserType} from "../../../redux/store";
import {connect} from "react-redux";
import {getFriends} from "../../../redux/sidebar-reducer";
import {WithAuthRedirect} from "../../../hoc/WithAuthRedirect";

export type FriendsType = {
    friends: Array<UserType>
    getFriends: () => void
}

class Friends extends React.Component<FriendsType> {

    componentDidMount() {
        this.props.getFriends()
    }

    render() {
        return (
            <div className={css.friends}>
                <h3 className={css.h3}>Friends</h3>
                <div className={css.friendsWrapper}>
                    {this.props.friends.map((f:UserType, i) => {
                        return (
                            <Friend id={f.id} key={i} name={f.name} ava={f.photos.small} />
                        )
                    })}

                </div>
            </div>
        )
    }
}

const mstp = (state: RootStateType) => {
    return {
        friends: state.sidebarPage.friends
    }
}

export default WithAuthRedirect(connect(mstp, {getFriends})(Friends))