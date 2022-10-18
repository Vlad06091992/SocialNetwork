import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {state} from "./redux/state";

export type DialogsDataType = {
    name:string
    id:number
}

export type DialogMessageType = {
    id: number,
    message: string
}

export type PostDataType = {
    message:string
    likes:number
}

let dialogsData = [
    {name: "Valera", id: 1},
    {name: "Sveta", id: 1},
    {name: "Max", id: 1},
    {name: "Kolyan", id: 1},
    {name: "Sueta", id: 1},
    {name: "Valera", id: 1},
]

let dialogMessage = [
    {id: 1, message: "Hello"},
    {id: 2, message: "How are you"},
    {id: 3, message: "Kak dela ?"},
    {id: 4, message: "kfslpf"}
]

let postData = [
    {message:"First post!!!!",likes:15},
    {message:"Second post!!!!",likes:15},
]

ReactDOM.render(
    <App dialogsData={dialogsData} dialogMessage={dialogMessage} postData={postData} />,
  document.getElementById('root')
);