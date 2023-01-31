import {
    ActionsType,
    PostDataType,
    ProfilePageType,
    setAboutMe,
    setContacts,
    setFullName,
    setLookingForAJob, setLookingForAJobDescription, setPhotos, setUserId
} from "./store";

let initialState: ProfilePageType = {

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
    userId: 2
}


export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType) => {

    switch (action.type) {
        case ("UPDATE-NEW-POST-TEXT"):
            return {...state, newPostText:  action.text}
        case ("ADD-POST"):
            const getNextId = () => {
                if (state.postData.length === 0) return 0
                return state.postData[state.postData.length - 1].id + 1
            }
            let newPost: PostDataType = {
                id: getNextId() || 1,
                message: state.newPostText,
                likes: 0
            }
            return {...state, newPostText: '', postData: [...state.postData, newPost]}
        case ("SET-ABOUT-ME"):
            return {...state,aboutMe:action.text}
        case ("SET-CONTACTS"):
            return {...state,contacts:{...action.contacts}}
        case ("SET-FULLNAME"):
            return {...state,fullName:action.text}
        case ("SET-LOOKING-FOR-A-JOB"):
            return {...state,lookingForAJob:action.status}
        case ("SET-LOOKING-FOR-A-JOB-DESCRIPTION"):
            return {...state,lookingForAJobDescription:action.text}
        case ("SET-PHOTOS"):
            return {...state,photos:{...action.photos}}
        case ("SET-USER-ID"):
            return {...state,userId:action.userId}
        default:
            return state
    }
}


//
// export const profileReducer = (state:ProfilePageType = initialState,action:ActionsType) =>{
//     switch (action.type) {
//         case ("UPDATE-NEW-POST-TEXT"):
//             state.newPostText = action.text
//             break
//         case ("ADD-POST"):
//             const getNextId = () => {
//                 if (state.postData.length == 0) return 0
//                 return state.postData[state.postData.length - 1].id + 1
//             }
//             let newPost: PostDataType = {
//                 id: getNextId() || 1,
//                 message: state.newPostText,
//                 likes: 0
//             }
//             state.postData.push(newPost)
//             state.newPostText = ''
//             break
//         default: return state
//
//     }
// return {...state}
// }