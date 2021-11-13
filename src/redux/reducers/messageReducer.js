const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body:text });

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
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let message = {
                id: state.messages.length,
                userId: 0,
                text: state.newMessageBody,
                income: false
            }
            state.messages.push(message);
            state.newMessageBody = "";
            return state;

        default:
            return state;
    }
}
export default messageReducer;