import React from "react";
import classes from "./Header.module.css"


type HeaderPropsType = {
    login: string | null
}

export const Header: React.FC<HeaderPropsType> = (props) => {
    return (
        <div className={classes.Header}>
            <img className={classes.Logo} src="https://cdn.worldvectorlogo.com/logos/react-2.svg"/>
            <div className={classes.Welcome}>Welcome to my project</div>

            {props.login != null ? <div className={classes.login}>Вы вошли как :
                {props.login}</div> : <div className={classes.login}>Вы не авторизованы</div>}
        </div>
    )
}