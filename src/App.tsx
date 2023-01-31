import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Profile/Profile";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import {DispatchType, RootStateType} from "./redux/store";
import {ReduxStoreType} from "./redux/redux-store";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";



type AppPropsType =  {
    state:RootStateType
    store:ReduxStoreType
    dispatch:DispatchType
}


export const App = (props:AppPropsType) => {
    
return (
        <BrowserRouter>
            <div className="app">
                <HeaderContainer/>
                <Sidebar sidebarData={props.state.sidebarPage}/>
                <div className="app-wrapper-content">
                    <Route path="/DialogsContainer" render={()=><DialogsContainer/>}/>
                    <Route path="/Profile/:userId" render={()=><ProfileContainer />}/>
                    <Route path="/News" component={News}/>
                    <Route path="/Music" component={Music}/>
                    <Route path="/Settings" component={Settings}/>
                    <Route path="/Users" component={UsersContainer}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

