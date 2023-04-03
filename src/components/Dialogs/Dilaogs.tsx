import React, {ChangeEvent} from "react";
import css from "./Dialogs.module.css"
import {DialogItem} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {DialogsStateType} from "../../redux/store";
import {SubmitHandler, useForm} from "react-hook-form";

type DialogsPropsType = {
    dialogsPage:DialogsStateType
    sendMessage: (text:string) => void
    textAreaValue: string
}

type FormValues = {
    messageText: string;
};


export const Dialogs = (props: DialogsPropsType) => {
    const dialogsElements = props.dialogsPage.dialogsData.map((d, i) => <DialogItem key={i} id={d.id} name={d.name}/>)
    const messagesElements = props.dialogsPage.dialogMessage.map((d, i) => <Message key={i} message={d.message}/>)
    const { register, handleSubmit, formState:{errors},reset } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = data => {
        props.sendMessage(data.messageText)
        reset();
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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <textarea placeholder={"Send message"} className={css.input} {...register("messageText", {required:true})}/>
                      <input type="submit"/>
                    </form>
                </div>
            </div>

        </div>
    )
}