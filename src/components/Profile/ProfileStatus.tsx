import React, {ChangeEvent, useEffect, useState} from "react";


type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatus = (props:ProfileStatusPropsType) => {

    const[editMode,setEditMode] = useState(false)
    const[status,setStatus] = useState(props.status)
    
    useEffect(()=>{
        setStatus(props.status)
    },[props.status])

    const onChangeHandler = (str:string) => {
       setStatus(str)
    }

    const onBlurHandler = () =>{
        setEditMode(false)
        props.updateStatus(status)
    }

        return (
            <div>
                {editMode && <input onChange={(e:ChangeEvent<HTMLInputElement>)=>onChangeHandler(e.currentTarget.value)} autoFocus onBlur={()=>onBlurHandler()} value={status}/>}
                {!editMode && <span onDoubleClick={()=>setEditMode(true)}>{status || '-----'}</span>}
            </div>
        )


}