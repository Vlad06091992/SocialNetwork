import {ChangeEvent} from "react";
import {sidebarReducer} from "./sidebar-reducer";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

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
export type ProfilePageType = {
    postData: Array<PostDataType>,
    newPostText: string
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
}
//

export type UsersPageType = {
    users: UserType[]
}
export type UserType = {
    id: number,
    followed: boolean
    photo: string,
    fullname: string
    status: string
    location: LocationType
}

export type LocationType = {
    city: string
    country: string
}


export type ActionsType = SetUsersAC | FollowUserActionType| UnFollowUserActionType | AddPostActionType | addMessageActionType | UpdateNewPostTextType | UpdateNewMessageTextType

type SetUsersAC = ReturnType<typeof setUsersAC>
type FollowUserActionType = ReturnType<typeof followUserAC>
type UnFollowUserActionType = ReturnType<typeof unFollowUserAC>
type AddPostActionType = ReturnType<typeof addPostAC>
type addMessageActionType = ReturnType<typeof addMessageAC>
type UpdateNewMessageTextType = ReturnType<typeof updateNewMessageTextAC>
type UpdateNewPostTextType = ReturnType<typeof updateNewPostTextAC>

export const setUsersAC = (users:UserType[]) => {
    return {
        type: 'SET-USERS',
        users:users
    } as const
}

export const followUserAC = (UserId: number) => {
    return {
        type: 'FOLLOW-USER',
        UserId: UserId
    } as const
}

export const unFollowUserAC = (UserId: number) => {
    return {
        type: 'UNFOLLOW-USER',
        UserId: UserId
    } as const
}

export const addPostAC = () => {
    return {
        type: "ADD-POST"
    } as const
}
export const addMessageAC = () => {
    return {
        type: "ADD-MESSAGE"
    } as const
}
export const updateNewMessageTextAC = (text: string | undefined) => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        text: text
    } as const
}
export const updateNewPostTextAC = (text: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        text: text
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



