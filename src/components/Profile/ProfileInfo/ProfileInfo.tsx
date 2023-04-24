import React from "react";
import css from "./ProfileInfo.module.css";
import {ProfileStatusClassComponent} from "../ProfileStatusClassComponent";
import profileContainer from "../ProfileContainer";
import {ProfileContainerType, ProfilePropsType} from "../../../redux/store";
import {Preloader} from "../../Preloader/Preloader";
import {ProfileStatus} from "../ProfileStatus";


export const ProfileInfo:React.FC<ProfilePropsType> = (props) => {

    if(!props.userId){
        return <Preloader/>
    }

    return(
        <div className={css.ProfileInfo}>
            <div style={{padding:"10px"}}>
                <img style={{maxWidth:'300px'}} src={props.photos.large ? props.photos.large : "https://ustanovkaos.ru/wp-content/uploads/2022/02/06-psevdo-pustaya-ava.jpg"}/>
        </div>
           <div style={{paddingLeft: '30px',paddingTop:'30px'}}>
               <span><ProfileStatus status={props.status} updateStatus={props.updateStatus}/></span>
               <p>Обо мне :{props.aboutMe}</p>
               <p>Мой ID :{props.userId}</p>
               <p>Полное имя : {props.fullName}</p>
               <a href={props.contacts.vk}>My vk</a><br/>
               <a href={props.contacts.twitter}>My twitter</a>
               <p>Описание работы, которую я ищу :{props.lookingForAJobDescription}</p>
               <p>Ищу ли я работу :{props.lookingForAJob}</p>
           </div>
        </div>
    )

}



