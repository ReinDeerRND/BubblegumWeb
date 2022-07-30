import { authAPI } from "../../api/api";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";

let initState = {
    userId: null,
    email: null,
    login: null,
    isLogged: false,
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.userData,
            };
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isLogged) => ({ type: SET_AUTH_USER_DATA, userData: { userId, email, login, isLogged } });

export const getAuthThunkCreator = () => (dispatch) => {
    authAPI.getAuth().then(res => {
        if (res.data.resultCode === 0) {
            let { id, login, email } = res.data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    });
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(res => {
        if (res.data.resultCode === 0) {
            dispatch(getAuthThunkCreator());
        }
    });
}

export const logout = () => (dispatch) => {
    authAPI.logout().then(res => {
        if (res.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    });
}


export default authReducer;