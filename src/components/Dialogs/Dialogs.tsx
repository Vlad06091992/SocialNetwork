import React from "react";
import css from "./Dialogs.module.css"
import {DialogItem} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {DialogMessageType, DialogsDataType} from "../../index";

type DialogsPropsType = {
    dialogsData:Array<DialogsDataType>
    dialogMessage:Array<DialogMessageType>
}

export const Dialogs = (props:DialogsPropsType) => {
    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                {props.dialogsData.map((d, i) => <DialogItem key={i} id={d.id} name={d.name}/>)}
            </div>
            <div className={css.messages}>
                {props.dialogMessage.map((d, i) => <Message key={i} message={d.message}/>)}
            </div>
        </div>
    )
}