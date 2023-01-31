import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AuthDataType, authUser, DispatchType, RootStateType} from "../../redux/store";
import {AuthStateType} from "../../redux/auth-reducer";

type HeaderContainerPropsType = {
    auth: AuthStateType
    authUser: (authData: AuthDataType) => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(res => {
                if (res.data.resultCode === 0) {
                   this.props.authUser(res.data.data)
                };
            })

    }

    render() {
        return <Header login={this.props.auth.login}/>
    }
}

let mapStateToProps = (state: RootStateType) => {
    return {
        auth: state.auth
    }
}

let mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        authUser: (authData: AuthDataType) => dispatch(authUser(authData))

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)