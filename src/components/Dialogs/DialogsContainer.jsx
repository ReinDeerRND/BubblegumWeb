import { connect } from 'react-redux';
import { sendMessageCreator } from '../../redux/reducers/messageReducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
  return {
    dialogs: state.messagePage.dialogs,
    messages: state.messagePage.messages
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessage) => dispatch(sendMessageCreator(newMessage))
  }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;