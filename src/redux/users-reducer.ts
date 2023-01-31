import {ActionsType, UsersPageType} from "./store";

let initialState = {
 users:   [],
    totalUserCount:0,
    pageSize:100,
    currentPage:1,
    isFetching:false,
    followingInProgress:[2]
}
export const userReducer = (state: UsersPageType = initialState, action: ActionsType):UsersPageType => {
    switch (action.type) {
        case("FOLLOW-USER"): {
            return {...state, users:state.users.map(el => el.id === action.UserId ? {...el,followed : true}: el)}

        }
        case ("UNFOLLOW-USER"): {
            return {...state, users:state.users.map(el => el.id === action.UserId ? {...el,followed : false}: el)}
        }

        case ("SET-USERS"): {
            return {...state , users:[...action.users]}
        }
        case ("SET-TOTAL-COUNT"): {
            return {...state , totalUserCount:(action.totalUserCount)}
        }

        case ("SET-CURRENT-PAGE"): {
            return {...state , currentPage:(action.currentPage)}
        }
        case ("TOGGLE-FETCHING"): {
            return {...state , isFetching:(action.isFetching)}
        }
        case ("SET-ID-FOLLOWING-PROGRESS"): {
            return {...state , followingInProgress:[...state.followingInProgress, action.id]}
        }
        case ("REMOVE-ID-FOLLOWING-PROGRESS"): {
            return {...state , followingInProgress:state.followingInProgress.filter(id=> id !== action.id)}
        }

        default:
            return state
    }
}
