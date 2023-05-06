import {ActionsType, DialogMessageType, DialogsStateType} from "./store";

let initialState: DialogsStateType = {
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

export const dialogsReducer = (state: DialogsStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case ("dialogs/ADD-MESSAGE"): {
            const getNextId = () => {
                if (state.dialogMessage.length === 0) return 0
                return state.dialogMessage[state.dialogMessage.length - 1].id + 1
            }
            let newMessage: DialogMessageType = {id: getNextId(), message: action.text}
            return {...state, dialogMessage: [...state.dialogMessage, newMessage]}
        }
        default:
            return state
    }
}


/* For Dialogs reducer */
export const addMessage = (text: string) => {
    return {
        type: "dialogs/ADD-MESSAGE",
        text
    } as const
}

export type ForDialogsReducerTypes = AddMessageACType

type AddMessageACType = ReturnType<typeof addMessage>