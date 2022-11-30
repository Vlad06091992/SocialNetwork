import {ActionsType, DialogMessageType, MessagesPageType, PostDataType} from "./state";


export const dialogsReducer = (state:MessagesPageType,action:ActionsType) =>{
    switch (action.type) {
        case ("UPDATE-NEW-MESSAGE-TEXT"):
         state.newMessageText = action.text as string
            break
        case ("ADD-MESSAGE"): {
            const getNextId = () => {
                if (state.dialogMessage.length == 0) return 0
                return state.dialogMessage[state.dialogMessage.length - 1].id + 1
            }

            let newMessage: DialogMessageType = {id: getNextId(), message: state.newMessageText}
            state.dialogMessage.push(newMessage)
            state.newMessageText = ''

            break
        }
    }

    return state
}