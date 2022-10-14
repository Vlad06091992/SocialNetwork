import css from "./Message.module.css";
import React from "react";

export const Message = (props:any) => {
    return(
        <div className={css.message}>{props.message}</div>
    )
}