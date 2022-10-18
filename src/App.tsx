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
import {DialogsDataType,DialogMessageType,PostDataType} from "./index";

type AppPropsData = {
    dialogsData:Array<DialogsDataType>
    dialogMessage:Array<DialogMessageType>
    postData:Array<PostDataType>

}

export const App = (props:AppPropsData) => {

    return (
        <BrowserRouter>
            <div className="app">
                <Header/>
                <Sidebar/>
                <div className="app-wrapper-content">
                    <Route path="/Dialogs" render={()=><Dialogs dialogsData={props.dialogsData} dialogMessage={props.dialogMessage}/>}/>
                    <Route path="/Profile" render={()=><Profile postData={props.postData}/>}/>
                    <Route path="/News" component={News}/>
                    <Route path="/Music" component={Music}/>
                    <Route path="/Settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

