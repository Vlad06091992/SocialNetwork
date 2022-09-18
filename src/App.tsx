import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";

// import {Profile} from "./hub/Profile/Profile";
import {Profile} from "./components/Main/Profile/Profile";
import {Sidebar} from "./components/Main/Sidebar/Sidebar";

export const App = () => {
    return (
        <div className="App">
            <Header argument={1}/>
           <Main/>

        </div>
    );
}

