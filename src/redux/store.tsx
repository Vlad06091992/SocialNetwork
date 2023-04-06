import {ChangeEvent} from "react";
import {AuthStateType, ForAuthReducerrTypes} from "./auth-reducer";
import {ForUsersReducerTypes} from "./users-reducer";
import {RouteComponentProps} from "react-router";
import {ForProfileReducerType} from "./profile-reducer";
import {ForSideBarReducerType} from "./sidebar-reducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType, ForAppReducerTypes} from "./app-reducer";
import {FakeType} from "../index";

export type DialogDataType = {
    name: string
    id: number
}
export type DialogMessageType = {
    id: number,
    message: string
}
export type PostDataType = {
    message: string
    likes: number
    id: number
}
export type DialogsStateType = {
    dialogsData: Array<DialogDataType>
    dialogMessage: Array<DialogMessageType>
    newMessageText: string
}


export type ProfileType = {
    aboutMe: string,
    contacts: { vk: string, twitter: string }
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription?: string
    photos: {
        small: string
        large: string
    }
    userId: number,
}


export type ProfileInfoPropsType = {
    aboutMe: string,
    contacts: { vk: string, twitter: string }
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription?: string
    photos: {
        small: string
        large: string
    }
    userId: number,
    status: string
}

export type ProfileStateType = ProfileInfoPropsType & {
    postData: Array<PostDataType>,
    newPostText: string
}


export type ProfileContainerType = RouteComponentProps & {
    match: {
        isExact: boolean
        params: { userId: number }
        path: string
        url: string,
    }
    getUserProfile: (userId: number) => void
    updateStatus: (status: string) => void
    getUserStatus: (userId: number) => void
    profilePage: ProfileStateType
    status: string
    userId: number
}

export type ProfilePropsType = {
    aboutMe: string,
    contacts: { vk: string, twitter: string }
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription?: string
    photos: {
        small: string
        large: string
    }
    userId: number,
    status: string
    updateStatus: (status: string) => void
}


export type SidebarStateType = {
    friends: UserType[]
}
export type FriendType = {
    name: string
}
export type AddPostType = () => void
export type updateNewPostTextType = (e: ChangeEvent<HTMLTextAreaElement>) => void
export type RootStateType = {
    profilePage: ProfileStateType
    dialogsPage: DialogsStateType
    sidebarPage: SidebarStateType
    usersPage: UsersStateType
    auth: AuthStateType
    appInitialized: AppStateType
}
export type UsersStateType = {
    users: UserType[]
    totalUserCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
    fake: number


}
export type UserType = {
    "name": string,
    "id": number,
    "uniqueUrlName": string | null,
    "photos": {
        "small": string | null,
        "large": string | null
    },
    "status": string | null,
    "followed": boolean

}
export type LocationType = {
    city: string
    country: string
}


type ForDialogsReducerTypes = AddMessageACType


export type ActionsType =
    ForUsersReducerTypes
    | ForDialogsReducerTypes
    | ForProfileReducerType
    | ForAuthReducerrTypes
    | ForSideBarReducerType
    | ForAppReducerTypes
    | FakeType


/* For Dialogs reducer */


/* For Dialogs reducer */
export const addMessage = (text: string) => {
    return {
        type: "ADD-MESSAGE",
        text
    } as const
}
type AddMessageACType = ReturnType<typeof addMessage>





