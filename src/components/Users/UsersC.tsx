import React from "react";
import { UserType} from "../../redux/store";
import classes from "./Users.module.css"
import axios from "axios";


type UsersPropsType = {
    users: UserType[]
    totalCount: number
    pageSize: number
    currentPage: number
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setTotalCount: (totalCount: number) => void
    setCurrentPage: (currentPage: number) => void

}


export class UsersC extends React.Component<UsersPropsType> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {

        console.log(this.props.currentPage)

        // alert('i know i inside the DOM')

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                console.log(response)
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })

    }

    render() {

        let numberOfPages = Math.ceil(this.props.totalCount / this.props.pageSize)

        let pages = []

        for (let i = 1; i <= numberOfPages; i++) {
            pages.push(i)
        }


        const follow = (userId: number) => {
            this.props.follow(userId)
        }

        const unFollow = (userId: number) => {
            this.props.unFollow(userId)
        }

        const setCurrentPage = (currentPage: number) => {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${currentPage}`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.setCurrentPage(currentPage)
                })
        }

        return (
            <div>
                <div style={{maxWidth: '100%',margin:'10px',marginRight:'30px'}}>
                    {pages.map(el => <span className={el === this.props.currentPage ? classes.bold :""} key={el} onClick={() => setCurrentPage(el)}>{el + ' '}</span>)}
                </div>
                {this.props.users.map((el: UserType, i: number) => {
                    return (
                        <div key={i} className={classes.wrapper}>
                            <div>
                                <img className={classes.ava}
                                     src={el.photos.small ? el.photos.small : "https://shapka-youtube.ru/wp-content/uploads/2022/06/ava-kot-iz-shreka.jpg"}/>
                                <button
                                    onClick={() => el.followed ?
                                        follow(el.id) :
                                        unFollow(el.id)}
                                    className={classes.button}>{el.followed ? "UNFOLLOW" : "FOLLOW"}</button>
                            </div>
                            <div className={classes.main}>
                                <div className={classes.column}>
                                    <div>{el.name}</div>
                                    <div>{el.status}</div>
                                </div>
                                <div className={classes.column}>
                                    <div>location country</div>
                                    <div>location city</div>
                                </div>
                            </div>
                        </div>

                    )

                })}
            </div>
        );
    }


}