import React, {ChangeEvent} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Profile/Profile";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import {

    RootStateType,

    StoreType
} from "./redux/state";


type AppPropsType = {
    state:RootStateType
    store:StoreType
}


export const App = (props:AppPropsType) => {

    return (
        <BrowserRouter>
            <div className="app">
                <Header/>
                <Sidebar sidebarData={props.state.sidebarPage}/>
                <div className="app-wrapper-content">
                    <Route path="/Dialogs" render={()=><Dialogs
                        addMessage={props.store.addMessage}
                        newMessageText={props.state.dialogsPage.newMessageText}
                        updateNewMessageText={props.store.updateNewMessageText}
                        dialogsData={props.state.dialogsPage.dialogsData}
                        dialogMessage={props.state.dialogsPage.dialogMessage}/>}/>
                    <Route path="/Profile" render={()=><Profile
                        addPost={props.store.addPost}
                        updateNewPostText={props.store.updateNewPostText}
                        postData={props.state.profilePage.postData}
                        newPostText={props.state.profilePage.newPostText}/>}/>
                    <Route path="/News" component={News}/>
                    <Route path="/Music" component={Music}/>
                    <Route path="/Settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

