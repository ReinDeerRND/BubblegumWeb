const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body:text });

const messageReducer = (state, action) => {
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