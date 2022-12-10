import React, {ChangeEvent} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Profile/Profile";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import {DispatchType, RootStateType, StoreType} from "./redux/store";
import {ReduxStoreType} from "./redux/redux-store";


type AppPropsType =  {
    state:RootStateType
    store:ReduxStoreType
    dispatch:DispatchType
}


export const App = (props:AppPropsType) => {
    
return (
        <BrowserRouter>
            <div className="app">
                <Header/>
                <Sidebar sidebarData={props.state.sidebarPage}/>
                <div className="app-wrapper-content">
                    <Route path="/DialogsContainer" render={()=><DialogsContainer store={props.store}/>}/>
                    <Route path="/Profile" render={()=><Profile store={props.store}/>}/>
                    <Route path="/News" component={News}/>
                    <Route path="/Music" component={Music}/>
                    <Route path="/Settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

