import React from "react";
import classes from "./Header.module.css"
import {HeaderContainerPropsType} from "./HeaderContainer";
import {NavLink} from "react-router-dom";

export const Header: React.FC<HeaderContainerPropsType> = (props) => {




    return (
        <div className={classes.Header}>
            <img className={classes.Logo} src="https://cdn.worldvectorlogo.com/logos/react-2.svg"/>
            <div className={classes.Welcome}>Welcome to my project</div>

            {props.auth.isAuth ?
                <div>
                    <div className={classes.login}>Вы вошли как :
                        {props.auth.login}
                        <button className={classes.button} onClick={()=>{props.logoutTC()}}>logout</button>
                    </div>
                </div>
                :
                <NavLink to="/Login">Login</NavLink>

            }


        </div>
    )
}



