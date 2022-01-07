import { combineReducers, createStore } from "redux";
import messageReducer from "./reducers/messageReducer";
import profileReducer from "./reducers/profileReducer";
import friendsWidgetReducer from "./reducers/friendsWidgetReducer";
import usersReducer from "./reducers/usersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    friendsWidget: friendsWidgetReducer,
    usersPage: usersReducer
})

let store = createStore(reducers);

export default store;