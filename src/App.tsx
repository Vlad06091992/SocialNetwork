import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Profile/Profile";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import {RootStateType} from "./redux/state";


type AppPropsType = {
    state:RootStateType
}


export const App = (props:AppPropsType) => {

    return (
        <BrowserRouter>
            <div className="app">
                <Header/>
                <Sidebar/>
                <div className="app-wrapper-content">
                    <Route path="/Dialogs" render={()=><Dialogs dialogsData={props.state.messagesPage.dialogsData} dialogMessage={props.state.messagesPage.dialogMessage}/>}/>
                    <Route path="/Profile" render={()=><Profile postData={props.state.profilePage.postData}/>}/>
                    <Route path="/News" component={News}/>
                    <Route path="/Music" component={Music}/>
                    <Route path="/Settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

