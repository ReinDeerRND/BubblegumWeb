import { userAPI } from "../../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_SELECTED_PAGE = "SET_SELECTED_PAGE";
const TOGGLE_LOADING = "TOGGLE_LOADING";
const TOGGLE_FOLLOW = "TOGGLE_FOLLOW"

let initState = {
    users: [],
    totalCount: 0,
    pageSize: 50,
    selectedPage: 1,
    isLoading: false,
    followUsersInProcess: []
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
        case TOGGLE_FOLLOW:
            return {
                ...state,
                followUsersInProcess: action.isLoading
                    ? [...state.followUsersInProcess, action.userId]
                    : state.followUsersInProcess.map(user => user !== action.userId)
            }
        default:
            return state;
    }
}

export const setFollow = (userId) => ({ type: FOLLOW, userId });
export const setUnfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setTotalCount = (count) => ({ type: SET_TOTAL_COUNT, count });
export const setSelectedPage = (pageNumber) => ({ type: SET_SELECTED_PAGE, pageNumber });
export const toggleLoading = (isLoading) => ({ type: TOGGLE_LOADING, isLoading });
export const toggleFollowing = (isLoading, userId) => ({ type: TOGGLE_FOLLOW, isLoading, userId });
//thunks
export const getUsersThunkCreator = (selectedPage, pageSize) => (dispatch) => {
    dispatch(toggleLoading(true));
    userAPI.getUsers(selectedPage, pageSize).then(data => {
        dispatch(setUsers(data.items));
        dispatch(setTotalCount(data.totalCount));
        dispatch(toggleLoading(false));
    });
}

export const followUserThunkCreator = (userId) => (dispatch) => {
    dispatch(toggleFollowing(true, userId));
    userAPI.followUser(userId).then(res => {
        if (res.data.resultCode === 0) {
            dispatch(setFollow(userId))
        }
        dispatch(toggleFollowing(false, userId));
    })
}

export const unfollowUserThunkCreator = (userId) => (dispatch) => {
    dispatch(toggleFollowing(true, userId));
    userAPI.unfollowUser(userId).then(res => {
        if (res.data.resultCode === 0) {
            dispatch(setUnfollow(userId))
        }
        dispatch(toggleFollowing(false, userId));
    })
}

export default usersReducer;