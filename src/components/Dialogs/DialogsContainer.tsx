import React from "react";
import {DispatchType, RootStateType
} from "../../redux/store";


import {addMessageAC} from "../../redux/store";
import {updateNewMessageTextAC} from "../../redux/store";
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
        sendMessage:()=>dispatch(addMessageAC()),
        updateNewMessageText:(text: string) => dispatch(updateNewMessageTextAC(text))
//     }
    }

}

export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)