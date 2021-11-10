const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 0, text: "Post 1 About ocean", likesCount: 3 },
                { id: 1, text: "Post 2 About Sun", likesCount: 42 }
            ],
            newPostText: ""
        },
        messagePage: {
            dialogs: [
                { id: 0, name: 'Andrew' },
                { id: 1, name: 'Sveta' },
                { id: 2, name: 'Afina' },
                { id: 3, name: 'Guru' },
                { id: 4, name: 'Stranger' },
            ],
            messages: [
                { id: 0, userId: 0, text: "Hi! How are you?", income: true },
                { id: 1, userId: 0, text: "Hi! I am fine!", income: false },
                { id: 2, userId: 1, text: "Hi! How are your cat?", income: true }
            ],
            newMessageBody: "",
        },
        friendsWidget: [
            { id: 2, name: "Yugor" },
            { id: 1, name: 'Sveta' },
            { id: 0, name: 'Andrew' },
        ]
    },
    _callSubscriber() {
        console.log("State changed")
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        switch (action.type) {
            case ADD_POST:
                let post = {
                    id: this._state.profilePage.posts.length,
                    text: this._state.profilePage.newPostText,
                    likesCount: 0
                };
                this._state.profilePage.posts.unshift(post);
                this._state.profilePage.newPostText = "";
                this._callSubscriber(this._state);
                break;
            case UPDATE_NEW_POST_TEXT:
                this._state.profilePage.newPostText = action.newText;
                this._callSubscriber(this._state);
                break;
            case UPDATE_NEW_MESSAGE_BODY:
                    this._state.messagePage.newMessageBody = action.body;
                    this._callSubscriber(this._state);
                    break; 
            case SEND_MESSAGE:
                let message = { 
                    id: this._state.messagePage.messages.length, 
                    userId: 0, 
                    text: this._state.messagePage.newMessageBody, 
                    income: false 
                }
                this._state.messagePage.messages.push(message);
                this._state.messagePage.newMessageBody = "";
                this._callSubscriber(this._state);
                break; 
    
            default:
                console.log("Empty action");
                break;
        }
    },
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewTextActionCreator = (newText) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText });

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body:text });

export default store;
