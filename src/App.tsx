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
import {AddMessageType, AddPostType, RootStateType} from "./redux/state";


type AppPropsType = {
    state:RootStateType
    addPost:AddPostType
    addMessage:AddMessageType

}


export const App = (props:AppPropsType) => {

    return (
        <BrowserRouter>
            <div className="app">
                <Header/>
                <Sidebar sidebarData={props.state.sidebarPage}/>
                <div className="app-wrapper-content">
                    <Route path="/Dialogs" render={()=><Dialogs addMessage={props.addMessage} dialogsData={props.state.dialogsPage.dialogsData} dialogMessage={props.state.dialogsPage.dialogMessage}/>}/>
                    <Route path="/Profile" render={()=><Profile addPost={props.addPost} postData={props.state.profilePage.postData}/>}/>
                    <Route path="/News" component={News}/>
                    <Route path="/Music" component={Music}/>
                    <Route path="/Settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

