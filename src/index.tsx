import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {store} from "./redux/state";



export let rerenderEntireTree = () => {
    ReactDOM.render(
        <App store={store}
             dispatch={store.dispatch}
             state={store._state}/>,
        document.getElementById('root')
    );
}

rerenderEntireTree()
store.subscribe(rerenderEntireTree)









