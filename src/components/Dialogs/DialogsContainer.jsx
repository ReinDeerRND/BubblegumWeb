import { connect } from 'react-redux';
import { updateNewMessageCreator, sendMessageCreator } from '../../redux/reducers/messageReducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state)=>{
  return {
    dialogs: state.messagePage.dialogs,
    messages: state.messagePage.messages,
    newMessageBody: state.messagePage.newMessageBody,
  }
}
let mapDispatchToProps = (dispatch)=>{
  return {
    updateMessageChange: (text)=>dispatch(updateNewMessageCreator(text)),
    sendMessage: ()=>dispatch(sendMessageCreator())
  }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;