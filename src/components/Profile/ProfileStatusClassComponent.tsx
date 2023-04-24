import React, {ChangeEvent} from "react";
import {ProfileContainerType} from "../../redux/store";
import {Profile} from "./Profile";

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

export class ProfileStatusClassComponent extends React.Component<ProfileStatusPropsType> {

  componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>, snapshot?: any) {
      if (prevProps.status != this.props.status){
          this.setState({status:this.props.status})
      }
  }

    state = {
        editMode: false,
        status: this.props.status
    }

    ActivateEditMode = () => {
        this.setState({editMode: true})
    }
    DeActivateEditMode = () => {
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status)
    }

    onChangeHandler  = (value:string) => {
        this.setState({status: value})
    }

    render() {
        return (
            <div>
                {this.state.editMode && <input onChange={(e:ChangeEvent<HTMLInputElement>)=>this.onChangeHandler(e.currentTarget.value)} autoFocus onBlur={this.DeActivateEditMode} value={this.state.status}/>}
                {!this.state.editMode && <span onDoubleClick={this.ActivateEditMode}>{this.state.status || '-----'}</span>}
            </div>
        )
    }

}