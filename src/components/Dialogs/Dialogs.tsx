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

    let newMessageElement = React.createRef<HTMLTextAreaElement>()
    const newMessage = () => {
        props.dispatch(addMessageAC())
    }

    const updateNewMessageText = () => {
        let text = newMessageElement.current?.value
        props.dispatch(updateNewMessageTextAC(text))
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

                    <textarea onChange={updateNewMessageText}
                              ref={newMessageElement}
                              className={css.input}
                              value={props.newMessageText}
                    />
                    <button onClick={newMessage} className={css.button}>send message</button>
                </div>
            </div>

        </div>
    )
}