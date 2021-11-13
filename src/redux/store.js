import { combineReducers, createStore } from "redux";
import messageReducer from "./reducers/messageReducer";
import profileReducer from "./reducers/profileReducer";
import friendsWidgetReducer from "./reducers/friendsWidgetReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    friendsWidget: friendsWidgetReducer
})

let store = createStore(reducers);

export default store;