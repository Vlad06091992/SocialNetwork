import React from 'react';
import './App.css';
import {Sidebar} from "./components/Sidebar/Sidebar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import {RootStateType} from "./redux/store";
import {ReduxStoreType} from "./redux/redux-store";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {getAuthUserData} from "./redux/auth-reducer";
import {Dispatch} from "redux";



type AppPropsType =  {
    state:RootStateType
    store:ReduxStoreType
    dispatch:Dispatch | any

}


export const App = (props:AppPropsType) => {


return (
        <BrowserRouter>
            <div className="app">
                <HeaderContainer/>
                <Sidebar sidebarData={props.state.sidebarPage}/>
                <div className="app-wrapper-content">
                    <Route path="/Profile/:userId?" render={()=><ProfileContainer/>}/>
                    <Route path="/Login" render={()=><Login/>}/>
                    <Route path="/DialogsContainer" render={()=><DialogsContainer/>}/>
                    <Route path="/News" component={News}/>
                    <Route path="/Music" component={Music}/>
                    <Route path="/Settings" component={Settings}/>
                    <Route path="/Users" component={UsersContainer}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

