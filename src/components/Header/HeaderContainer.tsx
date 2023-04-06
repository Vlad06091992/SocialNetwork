import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/store";
import {getAuthUserDataTC, AuthStateType, logoutTC} from "../../redux/auth-reducer";

export type HeaderContainerPropsType = {
    auth: AuthStateType
    logoutTC:()=>void

}

class HeaderContainer extends React.Component<HeaderContainerPropsType>{


    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state: RootStateType) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps,{logoutTC,getAuthUserDataTC} )(HeaderContainer)

// export default HeaderContainer