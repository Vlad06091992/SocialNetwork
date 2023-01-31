import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {DispatchType, ProfileContainerType, RootStateType, setAboutMe, setContacts,
    setFullName, setLookingForAJob, setLookingForAJobDescription, setPhotos, setUserId,
} from "../../redux/store";
import axios from "axios";
import {withRouter} from "react-router-dom";
import {RouteComponentProps} from "react-router";
import {UsersApi} from "../../api/api";

class ProfileContainer extends React.Component<ProfileContainerType & RouteComponentProps> {
    componentDidMount() {

        let userId = this.props.match.params.userId
        UsersApi.getUserProfile(userId)
            .then(response => {
                this.props.setAboutMe(response.aboutMe)
                this.props.setContacts(response.contacts)
                this.props.setUserId(response.aboutMe)
                this.props.setFullName(response.fullName)
                this.props.setLookingForAJob(response.lookingForAJob)
                this.props.setLookingForAJobDescription(response.lookingForAJobDescription)
                this.props.setPhotos(response.photos)
                this.props.setUserId(response.userId)
            })


    }

    render() {
        return (
            <Profile userId={this.props.userId}
                     aboutMe={this.props.aboutMe}
                     photos={this.props.photos}
                     fullName={this.props.fullName}
                     lookingForAJob={this.props.lookingForAJob}
                     contacts={this.props.contacts}
                     lookingForAJobDescription={this.props.lookingForAJobDescription}/>
        )

    }
}

let mapStateToProps = (state: RootStateType) => {
    return {
        aboutMe: state.profilePage.aboutMe,
        contacts: state.profilePage.contacts,
        fullName: state.profilePage.fullName,
        lookingForAJob: state.profilePage.lookingForAJob,
        lookingForAJobDescription: state.profilePage.lookingForAJobDescription,
        photos: state.profilePage.photos,
        userId: state.profilePage.userId

    }
}

let mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        setAboutMe: (text: string) => dispatch(setAboutMe(text)),
        setContacts: (contacts: { vk: string, twitter: string }) => dispatch(setContacts(contacts)),
        setFullName: (text: string) => dispatch(setFullName(text)),
        setLookingForAJob: (status: boolean) => dispatch(setLookingForAJob(status)),
        setLookingForAJobDescription: (text: string) => dispatch(setLookingForAJobDescription(text)),
        setPhotos: (photos: { small: string, large: string }) => dispatch(setPhotos(photos)),
        setUserId: (userId: number) => dispatch(setUserId(userId))
    }
}

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, mapDispatchToProps)(withUrlDataContainerComponent)