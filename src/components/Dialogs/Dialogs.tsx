import React, {ChangeEvent} from "react";
import css from "./Dialogs.module.css"
import {DialogItem} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {
    AddMessageType,
    DialogMessageType,
    DialogsDataType,
    DispatchType,
    updateNewMessageTextType
} from "../../redux/state";


import {addMessageAC} from "../../redux/state";
import {updateNewMessageTextAC} from "../../redux/state";

type DialogsPropsType = {
    dialogsData: Array<DialogsDataType>
    dialogMessage: Array<DialogMessageType>
    newMessageText: string
    dispatch: DispatchType
}

export const Dialogs = (props: DialogsPropsType) => {


    const newMessage = () => {
        props.dispatch(addMessageAC())
    }
    const updateNewMessageText = (e:any) => {
        let text = e.currentTarget.value
        props.dispatch(updateNewMessageTextAC(text))
    }

    const dialogsElements = props.dialogsData.map((d, i) => <DialogItem key={i} id={d.id} name={d.name}/>)


    const messageElements = () => props.dialogMessage.map((d, i) => <Message key={i} message={d.message}/>)



    return (

        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={css.messages}>
                <div>
                    {messageElements()}

                </div>
                <div className={css.inputButton}>

                    <textarea placeholder={"Send message"}
                              onChange={updateNewMessageText}
                              className={css.input}
                              value={props.newMessageText}
                    />
                    <button onClick={newMessage} className={css.button}>send message</button>
                </div>
            </div>

        </div>
    )
}