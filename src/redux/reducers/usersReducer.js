const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_SELECTED_PAGE = "SET_SELECTED_PAGE";
const TOGGLE_LOADING = "TOGGLE_LOADING";

let initState = {
    users: [],
    totalCount: 0,
    pageSize: 50,
    selectedPage: 1,
    isLoading: false
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
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.count
            }
        case SET_SELECTED_PAGE:
            return {
                ...state,
                selectedPage: action.pageNumber
            }
        case TOGGLE_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setTotalCountAC = (count) => ({ type: SET_TOTAL_COUNT, count });
export const setSelectedPageAC = (pageNumber) => ({ type: SET_SELECTED_PAGE, pageNumber });
export const toggleLoadingAC = (isLoading)=>({type: TOGGLE_LOADING, isLoading});

export default usersReducer;