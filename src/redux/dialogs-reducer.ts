import {ActionsType, DialogMessageType, MessagesPageType} from "./store";

let initialState: MessagesPageType = {
    dialogsData: [
        {name: "Valera", id: 1},
        {name: "Sveta", id: 2},
        {name: "Max", id: 3},
        {name: "Kolyan", id: 4},
        {name: "Sueta", id: 5},
        {name: "Valera", id: 6},
    ],
    dialogMessage: [
        {id: 1, message: "Hello"},
        {id: 2, message: "How are you"},
        {id: 3, message: "Kak dela ?"},

    ],
    newMessageText: ""
}

export const dialogsReducer = (state: MessagesPageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case ("UPDATE-NEW-MESSAGE-TEXT"):
            // state.newMessageText = action.text as string
            return {...state}
        case ("ADD-MESSAGE"): {
            const getNextId = () => {
                if (state.dialogMessage.length === 0) return 0
                return state.dialogMessage[state.dialogMessage.length - 1].id + 1
            }
            let newMessage: DialogMessageType = {id: getNextId(), message: state.newMessageText}
            state.newMessageText = ''
            return {...state, newMessageText: "", dialogMessage:[...state.dialogMessage,newMessage]}
        }
        default:
            return state
    }
}