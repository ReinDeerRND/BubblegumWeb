const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: text });

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
    let nextState = { ...state };
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            nextState.newMessageBody = action.body;
            return nextState;
        case SEND_MESSAGE:
            let message = {
                id: nextState.messages.length,
                userId: 0,
                text: nextState.newMessageBody,
                income: false
            }
            nextState.messages = [...state.messages];
            nextState.messages.push(message);
            nextState.newMessageBody = "";
            return nextState;
        default:
            return nextState;
    }
}
export default messageReducer;