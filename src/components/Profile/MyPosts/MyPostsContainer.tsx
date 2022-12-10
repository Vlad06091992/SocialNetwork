import React from "react";
import {addPostAC, DispatchType, PostDataType} from "../../../redux/store";
import {updateNewPostTextAC} from "../../../redux/store";
import {MyPosts} from "./MyPosts";
import {ReduxStoreType} from "../../../redux/redux-store";
import { StoreContext } from "../../../StoreContext";

// type MyPostsPropsType = {
//     store: ReduxStoreType
// }

export const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store)=>{
                let posts = store.getState().profilePage.postData
                let newPostTest = store.getState().profilePage.newPostText
                const newPost = () => store.dispatch(addPostAC())
                const onPostChange = (text: string | undefined) => {
                    if (text) {
                        store.dispatch(updateNewPostTextAC(text))
                    }
                }

                return <MyPosts posts={posts}
                              onPostChange={onPostChange}
                              addPost={() => newPost()}
                              newPostText={newPostTest}/>}}
        </StoreContext.Consumer>

    )
}