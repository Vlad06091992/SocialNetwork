import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {RootStateType, state, store} from "./redux/state";

import {subscribe} from "./redux/state";

export let rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <App store={store}
             state={state}/>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state)
subscribe(rerenderEntireTree)









