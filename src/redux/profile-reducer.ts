import {ActionsType, PostDataType, ProfileStateType,} from "./store";
import {ProfileApi, UsersApi} from "../api/api";
import {setCurrentPage, setFetching, setTotalUserCount, setUsers} from "./users-reducer";
import {Dispatch} from "redux";
import {addMessage} from "./dialogs-reducer";
import {AppDispatch, AppThunk} from "./redux-store";
import App from "../App";

let initialState: ProfileStateType = {

    postData: [
        {id: 1, message: "First post!!!!", likes: 125},
        {id: 2, message: "Second post!!!!", likes: 17},
    ],
    newPostText: "",
    aboutMe: "",
    contacts: {vk: '', twitter: ''},
    fullName: "",
    lookingForAJob: true,
    lookingForAJobDescription: "",
    photos: {
        small: '',
        large: ''
    },
    userId: 2,
    status: ''
}


export const profileReducer = (state: ProfileStateType = initialState, action: ActionsType) => {

    switch (action.type) {
        case ("profile/ADD-POST"):
            const getNextId = () => {
                if (state.postData.length === 0) return 0
                return state.postData[state.postData.length - 1].id + 1
            }
            let newPost: PostDataType = {
                id: getNextId() || 1,
                message: action.text,
                likes: 0
            }
            return {...state, newPostText: '', postData: [...state.postData, newPost]}
        case ("profile/SET-USER-PROFILE"):
            return {
                ...state,
                aboutMe: action.response.aboutMe ? action.response.aboutMe : '',
                contacts: {
                    vk: action.response.contacts.vk ? action.response.contacts.vk : '',
                    twitter: action.response.contacts.twitter ? action.response.contacts.twitter : ''
                },
                userId: action.response.userId,
                fullName: action.response.fullName,
                lookingForAJob: action.response.lookingForAJob,
                lookingForAJobDescription: action.response.lookingForAJobDescription ? action.response.lookingForAJobDescription : '',
                photos: {
                    small: action.response.photos.small ? action.response.photos.small : '',
                    large: action.response.photos.large ? action.response.photos.large : '',
                },
            }
        case ("profile/DELETE-POST"):
            return {...state, postData: state.postData.filter(el => el.id != action.id)}
        case ("profile/SET-USER-STATUS"):
            return {...state, status: action.status}
        default:
            return state
    }

}

export const addPost = (text: string) => {
    return {
        type: "profile/ADD-POST",
        text
    } as const
}


export const deletePost = (id: number) => {
    return {
        type: "profile/DELETE-POST",
        id
    } as const
}

export const setUserProfile = (response: ResponseServerProfileType) => {
    return {
        type: "profile/SET-USER-PROFILE",
        response
    } as const
}

export const setUserStatus = (status: string) => {
    return {
        type: "profile/SET-USER-STATUS",
        status
    } as const
}

export const requestUsers = (pageSize?: number, currentPage: number = 1):AppThunk => async (dispatch: AppDispatch) => {
    dispatch(setFetching(true))
    let res = await UsersApi.getUsers(pageSize, currentPage)
    dispatch(setFetching(false))
    dispatch(setUsers(res.items))
    dispatch(setTotalUserCount(res.totalCount))
    dispatch(setCurrentPage(currentPage))
}

export const getUserProfile = (userId: number):AppThunk => async (dispatch: Dispatch) => {
        dispatch({type: 'profile/SET-LOADING-PROFILE-STATUS', status: false})
        let res = await ProfileApi.getUserProfile(userId)
        dispatch(setUserProfile(res))
        dispatch({type: 'profile/SET-LOADING-PROFILE-STATUS', status: true})
    }

export const getUserStatus = (userId: number):AppThunk =>  async (dispatch: AppDispatch) => {
    let res = await ProfileApi.getUserStatus(userId)
        dispatch(setUserStatus(res))
}

export const updateStatus = (status: string):AppThunk =>  async (dispatch: AppDispatch) => {
      let res = await  ProfileApi.updateStatus(status)
            if (res.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
}


type nullString = null | string

type ResponseServerProfileType = {
    aboutMe: nullString
    contacts: { facebook: nullString, github: nullString, instagram: nullString, mainLink: nullString, twitter: nullString, vk: nullString, website: nullString, youtube: nullString }
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: nullString
    photos: { small: nullString, large: nullString }
    userId: 27091
}

type AddPostActionType = ReturnType<typeof addPost>
type DeletePostActionType = ReturnType<typeof deletePost>
type AddMessageActionType = ReturnType<typeof addMessage>
type SetUserProfile = ReturnType<typeof setUserProfile>
type SetUserStatus = ReturnType<typeof setUserStatus>


export type ForProfileReducerType =
    AddPostActionType
    | AddMessageActionType
    | SetUserProfile
    | SetUserStatus
    | DeletePostActionType
