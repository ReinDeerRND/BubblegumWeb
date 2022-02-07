import { combineReducers, createStore } from "redux";
import messageReducer from "./reducers/messageReducer";
import profileReducer from "./reducers/profileReducer";
import friendsWidgetReducer from "./reducers/friendsWidgetReducer";
import usersReducer from "./reducers/usersReducer";
import authReducer from "./reducers/authReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    usersPage: usersReducer,
    friendsWidget: friendsWidgetReducer,
    auth: authReducer,
})

let store = createStore(reducers);

export default store;