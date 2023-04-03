import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/store";
import {getAuthUserData, AuthStateType, logout} from "../../redux/auth-reducer";

export type HeaderContainerPropsType = {
    auth: AuthStateType
    logout:()=>void

}

class HeaderContainer extends React.Component<HeaderContainerPropsType>{
    componentDidMount() {
// this.props.authMe()
    }

    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state: RootStateType) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps,{logout} )(HeaderContainer)

// export default HeaderContainer