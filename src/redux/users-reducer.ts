import {ActionsType, UsersPageType} from "./store";

let initialState: UsersPageType = {
    users: [
        {
            id: 2, photo: 'https://i.pinimg.com/736x/2e/2e/21/2e2e2125ee53807c2d77b34773f84b5c.jpg',
            followed: false,
            fullname: 'Sueta',
            status: 'i am boss',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 3, photo: 'https://i.pinimg.com/736x/2e/2e/21/2e2e2125ee53807c2d77b34773f84b5c.jpg',
            followed: true,
            fullname: 'Dmitriy',
            status: 'i am boss',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 4, photo: 'https://i.pinimg.com/736x/2e/2e/21/2e2e2125ee53807c2d77b34773f84b5c.jpg',
            followed: true,
            fullname: 'Max',
            status: 'i am boss',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 5, photo: 'https://i.pinimg.com/736x/2e/2e/21/2e2e2125ee53807c2d77b34773f84b5c.jpg',
            followed: false,
            fullname: 'Kolyan',
            status: 'i am boss',
            location: {city: 'Moscow', country: 'Russia'}
        }
    ]
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
            return {...state , users:[...state.users, ...action.users]}
        }

        default:
            return state
    }
}
