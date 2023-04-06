import {
    ActionsType, addMessage,
    PostDataType,
    ProfileStateType,
} from "./store";
import {ProfileApi, UsersApi} from "../api/api";
import {setCurrentPage, setFetching, setTotalUserCount, setUsers} from "./users-reducer";
import {Dispatch} from "redux";

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
        case ("ADD-POST"):
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
        case ("SET-ABOUT-ME"):
            return {...state, aboutMe: action.text}
        case ("SET-CONTACTS"):
            return {...state, contacts: {...action.contacts}}
        case ("SET-FULLNAME"):
            return {...state, fullName: action.text}
        case ("SET-LOOKING-FOR-A-JOB"):
            return {...state, lookingForAJob: action.status}
        case ("SET-LOOKING-FOR-A-JOB-DESCRIPTION"):
            return {...state, lookingForAJobDescription: action.text}
        case ("SET-PHOTOS"):
            return {...state, photos: {...action.photos}}
        case ("SET-USER-ID"):
            return {...state, userId: action.userId}
        case ("SET-USER-STATUS"):
            return {...state, status: action.status}
        default:
            return state
    }

}

export const addPost = (text:string) => {
    return {
        type: "ADD-POST",
        text
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

export const setUserStatus = (status: string) => {
    return {
        type: "SET-USER-STATUS",
        status
    } as const
}


type AddPostActionType = ReturnType<typeof addPost>
type AddMessageActionType = ReturnType<typeof addMessage>
type SetAboutMeAC = ReturnType<typeof setAboutMe>
type SetContactsAC = ReturnType<typeof setContacts>
type SetFullNameAC = ReturnType<typeof setFullName>
type SetLookingForAJobACDescription = ReturnType<typeof setLookingForAJobDescription>
type SetLookingForAJobAC = ReturnType<typeof setLookingForAJob>
type SetPhotosAC = ReturnType<typeof setPhotos>
type SetUserId = ReturnType<typeof setUserId>
type SetUserStatus = ReturnType<typeof setUserStatus>



export type ForProfileReducerType =
    AddPostActionType
    | AddMessageActionType
    | SetAboutMeAC
    | SetContactsAC
    | SetFullNameAC
    | SetLookingForAJobAC
    | SetLookingForAJobACDescription
    | SetPhotosAC
    | SetUserId
    | SetUserStatus



export const requestUsers = (pageSize?: number, currentPage: number = 1) => {
    return (dispatch: Dispatch) => {
        dispatch(setFetching(true))
        UsersApi.getUsers(pageSize, currentPage)
            .then(response => {
                dispatch(setFetching(false))
                dispatch(setUsers(response.items))
                dispatch(setTotalUserCount(response.totalCount))
                dispatch(setCurrentPage(currentPage))
            })

    }
}

export const getUserProfile = (userId: number) => {
    return (dispatch: Dispatch) => {
        ProfileApi.getUserProfile(userId)
            .then(response => {
                dispatch(setAboutMe(response.aboutMe))
                dispatch(setContacts(response.contacts))
                dispatch(setUserId(response.aboutMe))
                dispatch(setFullName(response.fullName))
                dispatch(setLookingForAJob(response.lookingForAJob))
                dispatch(setLookingForAJobDescription(response.lookingForAJobDescription))
                dispatch(setPhotos(response.photos))
                dispatch(setUserId(response.userId))
            })
    }
}

export const getUserStatus = (userId: number) => {
    return (dispatch: Dispatch) => {
        ProfileApi.getUserStatus(userId)
            .then(response => {
                dispatch(setUserStatus(response))
            })
    }
}

export const updateStatus = (status: string) => {
    return (dispatch: Dispatch) => {
        ProfileApi.updateStatus(status).then(r => {
            if (r.data.resultCode === 0) {
                dispatch(setUserStatus(status))

            }

        })
    }}