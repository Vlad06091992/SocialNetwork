import React from "react";
import {RootStateType} from "../../redux/store";


import {Dialogs} from "./Dilaogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose, Dispatch} from "redux";
import {addMessage} from "../../redux/dialogs-reducer";



let mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage,

    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return{
        sendMessage:(text:string)=>dispatch(addMessage(text)),
//     }
    }
}

// export const DialogsContainer = WithAuthRedirect(connect(mapStateToProps,mapDispatchToProps)(Dialogs))

export default compose<React.ComponentType>(WithAuthRedirect,(connect(mapStateToProps,mapDispatchToProps)  ))(Dialogs)