import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {addMessage, RootStateType} from "./redux/state";
import {addPost} from "./redux/state";



export let rerenderEntireTree = (state:RootStateType) => {
    ReactDOM.render(
        <App addMessage={addMessage} addPost={addPost} state={state} />,
        document.getElementById('root')
    );
}




