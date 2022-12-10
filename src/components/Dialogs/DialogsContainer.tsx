import React, {ChangeEvent} from "react";
import css from "./Dialogs.module.css"
import {DialogItem} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {
    AddMessageType,
    DialogMessageType,
    DialogDataType,
    DispatchType,
    updateNewMessageTextType
} from "../../redux/store";


import {addMessageAC} from "../../redux/store";
import {updateNewMessageTextAC} from "../../redux/store";
import {ReduxStoreType} from "../../redux/redux-store";
import {Dialogs} from "./Dilaogs";

type DialogsPropsType = {
    store: ReduxStoreType
}

export const DialogsContainer = (props: DialogsPropsType) => {

    let state = props.store.getState()

    const sendMessage = () => {
        props.store.dispatch(addMessageAC())
    }
    const updateNewMessageText = (text: string) => {
        props.store.dispatch(updateNewMessageTextAC(text))
    }


    const textAreaValue = props.store.getState().dialogsPage.newMessageText


    return (
        <Dialogs dialogsPage={state.dialogsPage}
                 updateNewMessageText={updateNewMessageText}
                 textAreaValue={textAreaValue}
                 sendMessage={sendMessage}
        />

    )
}