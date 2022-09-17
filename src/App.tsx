import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {Main} from "./components/Main/Main";

export const App = ()=>{
  return (
    <div className="App">
        <Header argument={1}/>
        <Main argument={1}/>
        <Footer arguments={1}/>
    </div>
  );
}

