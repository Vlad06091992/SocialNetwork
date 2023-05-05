import React from 'react';
import './App.css';
import {Sidebar} from "./components/Sidebar/Sidebar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import {RootStateType, SidebarStateType} from "./redux/store";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {Preloader} from "./components/Preloader/Preloader";
import {AppStateType, initializeApp} from "./redux/app-reducer";


type AppPropsType = {
    sidebarPage:SidebarStateType
    initialized:boolean
    initializeApp:()=>void

}


class App extends React.Component<AppPropsType> {

    componentDidMount() {
        this.props.initializeApp()
    }



    render() {
        if(this.props.initialized) {
            return <BrowserRouter>
                <div className="app">
                    <HeaderContainer/>
                    <Sidebar sidebarData={this.props.sidebarPage}/>
                    <div className="app-wrapper-content">
                        <Route path="/Profile/:userId?" render={() => <ProfileContainer/>}/>
                        <Route path="/DialogsContainer" render={() => <DialogsContainer/>}/>
                        <Route path="/News" component={News}/>
                        <Route path="/Music" component={Music}/>
                        <Route path="/Settings" component={Settings}/>
                        <Route path="/Users" component={UsersContainer}/>
                        <Route path="/Login" render={() => <Login/>}/>
                    </div>
                </div>
            </BrowserRouter>
        }

return <Preloader/>

}


}


const mapState = (state: RootStateType) => {

    return {
        sidebarPage:state.sidebarPage,
        initialized:state.appInitialized.initialized
    }
}

export default withRouter<any,any>(connect(mapState, {initializeApp})(App))