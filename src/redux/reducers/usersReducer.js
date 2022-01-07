import * as _ from "lodash";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const ADD_USERS = "ADD_USERS";

let initState = {
    users: [],
};

const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) return { ...user, followed: true }
                    return user
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) return { ...user, followed: false }
                    return user
                })
            }
        case ADD_USERS:
            return {
                ...state,
                users: _.uniqBy([...state.users, ...action.users], "id")
            }
        default:
            return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const addUsersAC = (users) => ({ type: ADD_USERS, users })

export default usersReducer;