import classes from "./Paginator.module.css";

type PaginatorPropsType = {
    totalUserCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (currentPage: number) => void
}

export const Paginator = ({totalUserCount,pageSize,currentPage,onPageChanged}:PaginatorPropsType) => {

    let numberOfPages = Math.ceil(totalUserCount / pageSize)
    let pages = []
    for (let i = 1; i <= numberOfPages; i++) {
        pages.push(i)
    }

    return(
        <div style={{maxWidth: '100%', margin: '10px', marginRight: '30px'}}>
            {pages.map(el => <span className={el === currentPage ? classes.bold : ""} key={el}
                                   onClick={() => onPageChanged(el)}>{el + ' '}</span>)}
        </div>

    )}


