import React from "react";
import css from "./Dialogs.module.css"
import {DialogItem} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {AddMessageType, DialogMessageType, DialogsDataType} from "../../redux/state";

type DialogsPropsType = {
    dialogsData:Array<DialogsDataType>
    dialogMessage:Array<DialogMessageType>
    addMessage:AddMessageType
}

export const Dialogs = (props:DialogsPropsType) => {

    let newMessageElement = React.createRef<HTMLInputElement>()

    const newMessage = () => {
        if(newMessageElement.current){
            let message = newMessageElement.current?.value
            props.addMessage(message)
            newMessageElement.current.value = ''
        }




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
                <input ref={newMessageElement} className={css.input}/>
                <button onClick={newMessage} className={css.button}>send message</button>
                </div>
            </div>

        </div>
    )
}