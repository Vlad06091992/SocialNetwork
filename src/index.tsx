import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {store} from "./redux/redux-store";
import {StoreContext} from "./StoreContext";


export let rerenderEntireTree = () => {
    ReactDOM.render(
<StoreContext.Provider value={store}>
        <App store={store}
             dispatch={store.dispatch}
             state={store.getState()}/>
</StoreContext.Provider> ,
        document.getElementById('root')
    );
}

rerenderEntireTree()
store.subscribe(rerenderEntireTree)









