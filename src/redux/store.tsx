import {ChangeEvent} from "react";
import {AuthStateType} from "./auth-reducer";

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
export type MessagesPageType = {
    dialogsData: Array<DialogDataType>
    dialogMessage: Array<DialogMessageType>
    newMessageText: string
}

export type ProfileContainerType = ProfileType & {
    setAboutMe: (text: string) => void,
    setContacts: (contacts: { vk: string, twitter: string }) => void,
    setFullName: (text: string) => void
    setLookingForAJob: (status: boolean) => void
    setLookingForAJobDescription: (text: string) => void
    setPhotos: (photos: { small: string, large: string }) => void
    setUserId: (userId: number) => void
    match: any
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


export type ProfilePageType = ProfileType & {
    postData: Array<PostDataType>,
    newPostText: string
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
}


export type PresentationProfileType = {
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


export type SidebarPageType = {
    friends: Array<FriendType>
}
export type FriendType = {
    name: string
}
export type AddPostType = () => void
export type updateNewPostTextType = (e: ChangeEvent<HTMLTextAreaElement>) => void
export type DispatchType = (arg: ActionsType) => void
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: MessagesPageType
    sidebarPage: SidebarPageType
    usersPage: UsersPageType
    auth: AuthStateType
}
export type UsersPageType = {
    users: UserType[]
    totalUserCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>


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


type ForUsersReducerTypes =
    SetIsFetchingAC
    | SetCurrentPageAC
    | SetTotalUserCountAC
    | SetUsersAC
    | FollowUserActionType
    | UnFollowUserActionType
    | SetFollowingProgress
    | RemoveFollowingProgress

type ForDialogsReducerTypes = UpdateNewPostTextType | UpdateNewMessageTextType
type ForProfilieReducerType =
    AddPostActionType
    | AddMessageActionType
    | SetAboutMeAC
    | SetContactsAC
    | SetFullNameAC
    | SetLookingForAJobAC
    | SetLookingForAJobACDescription
    | SetPhotosAC
    | SetUserId

export type ActionsType = ForUsersReducerTypes | ForDialogsReducerTypes | ForProfilieReducerType | AuthUser


/* For Users reducer */
type RemoveFollowingProgress = ReturnType<typeof removeFollowingProgress>
type SetFollowingProgress = ReturnType<typeof setFollowingProgress>
type SetIsFetchingAC = ReturnType<typeof setFetching>
type SetCurrentPageAC = ReturnType<typeof setCurrentPage>
type SetUsersAC = ReturnType<typeof setUsers>
type SetTotalUserCountAC = ReturnType<typeof setTotalUserCount>
type FollowUserActionType = ReturnType<typeof follow>
type UnFollowUserActionType = ReturnType<typeof unFollow>

/* For Dialogs reducer */
type UpdateNewMessageTextType = ReturnType<typeof updateNewMessageText>
type UpdateNewPostTextType = ReturnType<typeof updateNewPostText>

/* For Profile reducer */
type AddPostActionType = ReturnType<typeof addPost>
type AddMessageActionType = ReturnType<typeof addMessage>
type SetAboutMeAC = ReturnType<typeof setAboutMe>
type SetContactsAC = ReturnType<typeof setContacts>
type SetFullNameAC = ReturnType<typeof setFullName>
type SetLookingForAJobACDescription = ReturnType<typeof setLookingForAJobDescription>
type SetLookingForAJobAC = ReturnType<typeof setLookingForAJob>
type SetPhotosAC = ReturnType<typeof setPhotos>
type SetUserId = ReturnType<typeof setUserId>

type AuthUser = ReturnType<typeof authUser>

/* For Users reducer */
export const setFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-FETCHING',
        isFetching
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage
    } as const
}
export const setUsers = (users: UserType[]) => {
    return {
        type: 'SET-USERS',
        users: users
    } as const
}
export const setTotalUserCount = (totalUserCount: number) => {
    return {
        type: 'SET-TOTAL-COUNT',
        totalUserCount,
    } as const
}
export const follow = (UserId: number) => {
    return {
        type: 'FOLLOW-USER',
        UserId: UserId
    } as const
}
export const unFollow = (UserId: number) => {
    return {
        type: 'UNFOLLOW-USER',
        UserId: UserId
    } as const
}
export const setFollowingProgress = (id: number) => {
    return {
        type: "SET-ID-FOLLOWING-PROGRESS",
        id
    } as const
}
export const removeFollowingProgress = (id: number) => {
    return {
        type: "REMOVE-ID-FOLLOWING-PROGRESS",
        id
    } as const
}

/* For Dialogs reducer */
export const addMessage = () => {
    return {
        type: "ADD-MESSAGE"
    } as const
}
export const updateNewMessageText = (text: string | undefined) => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        text: text
    } as const
}

/* For Profile reducer */
export const addPost = () => {
    return {
        type: "ADD-POST"
    } as const
}
export const updateNewPostText = (text: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        text: text
    } as const
}
export const setAboutMe = (text: string) => {
    return {
        type: "SET-ABOUT-ME",
        text
    } as const
}
export const setContacts = (contacts: { vk: string, twitter: string }) => {
    return {
        type: "SET-CONTACTS",
        contacts
    } as const
}
export const setFullName = (text: string) => {
    return {
        type: "SET-FULLNAME",
        text
    } as const
}
export const setLookingForAJob = (status: boolean) => {
    return {
        type: "SET-LOOKING-FOR-A-JOB",
        status
    } as const
}
export const setLookingForAJobDescription = (text: string) => {
    return {
        type: "SET-LOOKING-FOR-A-JOB-DESCRIPTION",
        text
    } as const
}
export const setPhotos = (photos: { small: string, large: string }) => {
    return {
        type: "SET-PHOTOS",
        photos
    } as const
}
export const setUserId = (userId: number) => {
    return {
        type: "SET-USER-ID",
        userId
    } as const
}

//For auth reducer

export type AuthDataType = { id: number, login: string, email: string }

export const authUser = (authData: AuthDataType) => {
    return {
        type: 'AUTH-USER',
        authData
    } as const
}


// export type StoreType = {
//     _state: RootStateType
//     onChange: OnchangeType
//     subscribe: ObserverType
//     getState: GetStateType
//     dispatch: DispatchType
// }

// export let store: StoreType = {
//     _state: {
//         profilePage: {
//             postData: [
//                 {id: 1, message: "First post!!!!", likes: 125},
//                 {id: 2, message: "Second post!!!!", likes: 17},
//             ],
//             newPostText: "",
//         },
//         dialogsPage: {
//             dialogsData: [
//                 {name: "Valera", id: 1},
//                 {name: "Sveta", id: 2},
//                 {name: "Max", id: 3},
//                 {name: "Kolyan", id: 4},
//                 {name: "Sueta", id: 5},
//                 {name: "Valera", id: 6},
//             ],
//             dialogMessage: [
//                 {id: 1, message: "Hello"},
//                 {id: 2, message: "How are you"},
//                 {id: 3, message: "Kak dela ?"},
//
//             ],
//             newMessageText: ""
//         },
//         sidebarPage: {
//             friends: [{name: "Diman"}, {name: "Ilya"}, {name: "Leha"}, {name: "Sueta"}, {name: "Max"}, {name: "Kolyan"}, {name: "Vadim"}]
//         },
//         userPage:{
//             users: [
//                 {
//                     id: 2, photo: 'https://i.pinimg.com/736x/2e/2e/21/2e2e2125ee53807c2d77b34773f84b5c.jpg',
//                     followed: false,
//                     fullname: 'Sueta',
//                     status: 'i am boss',
//                     location: {city: 'Moscow', country: 'Russia'}
//                 },
//                 {
//                     id: 3, photo: 'https://i.pinimg.com/736x/2e/2e/21/2e2e2125ee53807c2d77b34773f84b5c.jpg',
//                     followed: true,
//                     fullname: 'Dmitriy',
//                     status: 'i am boss',
//                     location: {city: 'Moscow', country: 'Russia'}
//                 },
//                 {
//                     id: 4, photo: 'https://i.pinimg.com/736x/2e/2e/21/2e2e2125ee53807c2d77b34773f84b5c.jpg',
//                     followed: true,
//                     fullname: 'Max',
//                     status: 'i am boss',
//                     location: {city: 'Moscow', country: 'Russia'}
//                 },
//                 {
//                     id: 5, photo: 'https://i.pinimg.com/736x/2e/2e/21/2e2e2125ee53807c2d77b34773f84b5c.jpg',
//                     followed: false,
//                     fullname: 'Kolyan',
//                     status: 'i am boss',
//                     location: {city: 'Moscow', country: 'Russia'}
//                 }
//             ]
//         }
//
//     },
//
//     getState() {
//         return this._state
//     },
//     dispatch(action: ActionsType) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action)
//
//         this.onChange()
//     },
//     onChange() {
//         console.log("changed")
//     },
//     subscribe(callback: () => void) {
//         this.onChange = callback
//     }
// }



