import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {ProfileContainerType, RootStateType} from "../../redux/store";
import {withRouter} from "react-router-dom";
import {getUserProfile, getUserStatus, updateStatus} from "../../redux/profile-reducer";
import {compose} from "redux";
import {Preloader} from "../Preloader/Preloader";

class ProfileContainer extends React.Component<ProfileContainerType> {

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        if(prevProps.match.params.userId != this.props.match.params.userId){this.goToProfile()
        }
    }


    componentDidMount() {
        this.goToProfile()
    }

    goToProfile(){
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = this.props.userId
            if(!userId){
                this.props.history.push("/Login")
            }
        }

        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }



    render() {
        if(!this.props.profilePage) return <Preloader/>
        return (
            <Profile userId={this.props.profilePage.userId}
                     aboutMe={this.props.profilePage.aboutMe}
                     photos={this.props.profilePage.photos}
                     fullName={this.props.profilePage.fullName}
                     lookingForAJob={this.props.profilePage.lookingForAJob}
                     contacts={this.props.profilePage.contacts}
                     lookingForAJobDescription={this.props.profilePage.lookingForAJobDescription}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     isLoadingDataProfile={this.props.isLoadingDataProfile}
            />
        )

    }
}

let mapStateToProps = (state: RootStateType) => {

    return {
        profilePage: state.profilePage,
        status:state.profilePage.status,
        userId:state.auth.userId,
        isLoadingDataProfile:state.appInitialized.isLoadingDataProfile

    }
}

// export default  WithAuthRedirect(withRouter(connect(mapStateToProps, {getUserProfile,updateStatus,  getUserStatus,})(ProfileContainer)))
export default compose<React.ComponentType>(connect(mapStateToProps, {getUserProfile,updateStatus,getUserStatus,}), withRouter,
    // WithAuthRedirect,
)(ProfileContainer)


