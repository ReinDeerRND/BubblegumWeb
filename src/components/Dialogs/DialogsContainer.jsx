

import { updateNewMessageCreator, sendMessageCreator } from '../../redux/reducers/messageReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  let messagePage = props.store.getState().messagePage;
  let dialogs = messagePage.dialogs;
  let messages = messagePage.messages;
  let newMessageBody = messagePage.newMessageBody;

  let updateMessageChange = (text) => {
    props.store.dispatch(updateNewMessageCreator(text));
  }
  let sendMessage = () => {
    props.store.dispatch(sendMessageCreator());
  }
  return (
    <Dialogs
      dialogs={dialogs}
      messages={messages}
      newMessageBody={newMessageBody}
      updateMessageChange={updateMessageChange}
      sendMessage={sendMessage}
    />
  )
}
export default DialogsContainer;