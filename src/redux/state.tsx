import {rerenderEntireTree} from "../render";

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
    id:number
}
export type MessagesPageType = {
    dialogsData:Array<DialogsDataType>
    dialogMessage:Array<DialogMessageType>
}
export type ProfilePageType = {
    postData:Array<PostDataType>
}

export type SidebarPageType = {
    friends:Array<FriendType>
}

export type FriendType = {
    name:string
}

export type RootStateType = {
    profilePage:ProfilePageType
    dialogsPage:MessagesPageType
    sidebarPage:SidebarPageType
}

export type AddPostType = (m:string)=>void
export type AddMessageType = (m:string)=>void

export let state:RootStateType = {
    profilePage: {
        postData: [
            {id:1, message: "First post!!!!", likes: 125},
            {id:2, message: "Second post!!!!", likes: 17},
        ]
    },
    dialogsPage: {
        dialogsData: [
            {name: "Valera", id: 1},
            {name: "Sveta", id: 2},
            {name: "Max", id: 3},
            {name: "Kolyan", id: 4},
            {name: "Sueta", id: 5},
            {name: "Valera", id: 6},
        ],
        dialogMessage: [
            {id: 1, message: "Hello"},
            {id: 2, message: "How are you"},
            {id: 3, message: "Kak dela ?"},
            {id: 4, message: "kfslpf"}
        ],
    },
        sidebarPage:{
            friends : [{name:"Diman"},{name:"Ilya"},{name:"Leha"},{name:"Sueta"},{name:"Max"},{name:"Kolyan"},{name:"Vadim"}]
        }

}

export const addPost = (m:string) =>{
    const getNextId = () =>{
        if(state.profilePage.postData.length == 0) return 0
        return state.profilePage.postData[state.profilePage.postData.length - 1].id + 1
    }
    if(m){
        let newPost:PostDataType = {id: getNextId() || 1, message : m,likes : 0}
        state.profilePage.postData.push(newPost)
    }
    rerenderEntireTree(state)
}

export const addMessage = (m:string) =>{
    const getNextId = () =>{
        if(state.dialogsPage.dialogMessage.length == 0) return 0
        return state.dialogsPage.dialogMessage[state.dialogsPage.dialogMessage.length - 1].id + 1
    }
    if(m){
        let newMessage:DialogMessageType = {id: getNextId(), message : m}
        state.dialogsPage.dialogMessage.push(newMessage)
    }
    rerenderEntireTree(state)
}