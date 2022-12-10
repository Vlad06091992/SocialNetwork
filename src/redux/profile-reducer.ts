import {ActionsType, DialogMessageType, PostDataType, ProfilePageType} from "./store";

let initialState:ProfilePageType = {
    postData: [
        {id: 1, message: "First post!!!!", likes: 125},
        {id: 2, message: "Second post!!!!", likes: 17},
    ],
    newPostText: "",
}


export const profileReducer = (state:ProfilePageType = initialState,action:ActionsType) =>{
    switch (action.type) {
        case ("UPDATE-NEW-POST-TEXT"):
            state.newPostText = action.text
            break
        case ("ADD-POST"):
            const getNextId = () => {
                if (state.postData.length == 0) return 0
                return state.postData[state.postData.length - 1].id + 1
            }
            let newPost: PostDataType = {
                id: getNextId() || 1,
                message: state.newPostText,
                likes: 0
            }
            state.postData.push(newPost)
            state.newPostText = ''
            break
        default: return state

    }
return state
}