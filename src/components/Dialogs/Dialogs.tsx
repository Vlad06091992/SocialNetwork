import React, {ChangeEvent} from "react";
import css from "./Dialogs.module.css"
import {DialogItem} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {AddMessageType, DialogMessageType, DialogsDataType, updateNewMessageTextType} from "../../redux/state";

type DialogsPropsType = {
    dialogsData: Array<DialogsDataType>
    dialogMessage: Array<DialogMessageType>
    addMessage: AddMessageType
    updateNewMessageText: updateNewMessageTextType
    newMessageText:string
}

export const Dialogs = (props: DialogsPropsType) => {

    let newMessageElement = React.createRef<HTMLTextAreaElement>()
    const newMessage = () => {
        props.addMessage()
    }

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                {props.dialogsData.map((d, i) => <DialogItem key={i} id={d.id} name={d.name}/>)}
            </div>
            <div className={css.messages}>
                <div>
                    {props.dialogMessage.map((d, i) => <Message key={i} message={d.message}/>)}
                </div>
                <div className={css.inputButton}>
                    <textarea onChange={props.updateNewMessageText}
                              ref={newMessageElement} className={css.input}
                    value={props.newMessageText}/>
                    <button onClick={newMessage} className={css.button}>send message</button>
                </div>
            </div>

        </div>
    )
}