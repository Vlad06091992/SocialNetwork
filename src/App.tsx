import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Technologies} from "./components/Technologies";
import {Footer} from "./components/Footer";

export const App = ()=>{
  return (
    <div className="App">
        <Header argument={1}/>
     <Technologies argument={1}/>
        <Footer arguments={1}/>
    </div>
  );
}

