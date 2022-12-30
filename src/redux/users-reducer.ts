import {ActionsType, UsersPageType} from "./store";

let initialState = {
 users:   [],
    totalCount:0,
    pageSize:100,
    currentPage:1

}
export const userReducer = (state: UsersPageType = initialState, action: ActionsType):UsersPageType => {
    switch (action.type) {
        case("FOLLOW-USER"): {
            return {...state, users:state.users.map(el => el.id === action.UserId ? {...el,followed : false}: el)}

        }
        case ("UNFOLLOW-USER"): {
            return {...state, users:state.users.map(el => el.id === action.UserId ? {...el,followed : true}: el)}
        }

        case ("SET-USERS"): {
            return {...state , users:[...action.users]}
        }
        case ("SET-TOTAL-COUNT"): {
            return {...state , totalCount:(action.totalCount)}
        }

        case ("SET-CURRENT-PAGE"): {
            return {...state , currentPage:(action.currentPage)}
        }

        default:
            return state
    }
}
