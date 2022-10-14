import React from "react";
import css from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogType = {
    id: number
    name: string
}

export const DialogItem: React.FC<DialogType> = (props) => {
    const active = (isActive: boolean) => isActive ? css.active : css.item
    return (
        <div className={css.dialog}>
            <NavLink className={active} to={`/Dialogs/${props.id}`}>{props.name}</NavLink>

        </div>
    )
}