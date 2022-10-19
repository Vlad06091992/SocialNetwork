export type DialogsDataType = {
    name:string
    id:number
}
export type DialogMessageType = {
    id: number,
    message: string
}
export type PostDataType = {
    message:any
    likes:any
}
export type MessagesPageType = {
    dialogsData:Array<DialogsDataType>
    dialogMessage:Array<DialogMessageType>
}
export type ProfilePageType = {
    postData:Array<PostDataType>
}
export type RootStateType = {
    profilePage:ProfilePageType
    messagesPage:MessagesPageType
}

export let state:RootStateType = {
    profilePage: {
        postData: [
            {message: "First post!!!!", likes: 15},
            {message: "Second post!!!!", likes: 15},
        ]
    },
    messagesPage: {
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
}