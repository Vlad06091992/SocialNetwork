import {ActionsType, SidebarPageType} from "./store";

let initialState:SidebarPageType = {
    friends: [{name: "Diman"}, {name: "Ilya"}, {name: "Leha"}, {name: "Sueta"}, {name: "Max"}, {name: "Kolyan"}, {name: "Vadim"}]

}

export const sidebarReducer = (state:SidebarPageType = initialState,action:ActionsType) => {
   return {...state}
}