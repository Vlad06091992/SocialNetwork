import React, {ChangeEvent} from "react";
import css from "./Dialogs.module.css"
import {DialogItem} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {
    AddMessageType,
    DialogMessageType,
    DialogDataType,
    DispatchType,
    updateNewMessageTextType, MessagesPageType
} from "../../redux/store";


import {addMessageAC} from "../../redux/store";
import {updateNewMessageTextAC} from "../../redux/store";
import {ReduxStoreType} from "../../redux/redux-store";

type DialogsPropsType = {
    dialogsPage:MessagesPageType
    updateNewMessageText: (s: string) => void
    sendMessage: () => void
    textAreaValue: string
}

export const Dialogs = (props: DialogsPropsType) => {


    const dialogsElements = props.dialogsPage.dialogsData.map((d, i) => <DialogItem key={i} id={d.id} name={d.name}/>)
    const messagesElements = props.dialogsPage.dialogMessage.map((d, i) => <Message key={i} message={d.message}/>)

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageText(e.currentTarget.value)
    }
    const onClick = () => {
        props.sendMessage()
    }
    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={css.messages}>
                <div>
                    {messagesElements}
                </div>
                <div className={css.inputButton}>

                    <textarea placeholder={"Send message"}
                              onChange={onChange}
                              className={css.input}
                              value={props.textAreaValue}

                    />
                    <button onClick={onClick} className={css.button}>send message</button>
                </div>
            </div>

        </div>
    )
}