import "./Content.css"

type ContentPropsType = {
    arguments:any
}

export const Content:React.FC<ContentPropsType> = (props) => {
    return(
        <div className="Content">This is content</div>
    )
}