import React from "react";
import {DispatchType, RootStateType
} from "../../redux/store";


import {addMessage} from "../../redux/store";
import {updateNewMessageText} from "../../redux/store";
import {Dialogs} from "./Dilaogs";
import {connect} from "react-redux";

let mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        textAreaValue: state.dialogsPage.newMessageText
    }

}

let mapDispatchToProps = (dispatch: DispatchType) => {
    return{
        sendMessage:()=>dispatch(addMessage()),
        updateNewMessageText:(text: string) => dispatch(updateNewMessageText(text))
//     }
    }

}

export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)