const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initState = {
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
};

const messageReducer = (state = initState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let message = {
                id: state.messages.length,
                userId: 0,
                text: state.newMessageBody,
                income: false
            }
            return {
                ...state,
                messages: [...state.messages, message],
                newMessageBody: ""
            };
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: text });

export default messageReducer;