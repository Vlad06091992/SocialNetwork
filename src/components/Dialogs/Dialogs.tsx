import React from "react";
import css from "./Dialogs.module.css"
import {DialogItem} from "./Dialog/Dialog";
import {Message} from "./Message/Message";





export const Dialogs = () => {

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                <DialogItem name={"Valera"} id={1}/>
                <DialogItem name={"Sveta"} id={2}/>
                <DialogItem name={"Vlad"} id={3}/>
                <DialogItem name={"Max"} id={4}/>
                <DialogItem name={"Kolyan"} id={5}/>
                <DialogItem name={"Sueta"} id={6}/>

            </div>
            <div className={css.messages}>
              <Message message={"Hello"}/>
              <Message message={"How are you"}/>
              <Message message={"Kak dela ?"}/>
            </div>
        </div>
    )
}