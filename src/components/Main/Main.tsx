import {Sidebar} from "./Sidebar/Sidebar";
import {Profile} from "./Profile/Profile";
import './Main.css';


export const Main = ()=>{

    return(
        <div className="Main">
            <Sidebar/>
            <Profile/>
        </div>
    )
}