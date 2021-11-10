import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css'
import Message from './Message/Message';
import {updateNewMessageCreator, sendMessageCreator} from '../../redux/reducers/messageReducer';

const Dialogs = (props) => {
  let dialogsList = props.messagePage.dialogs.map(dialog => (<DialogItem name={dialog.name} id={dialog.id} />));
  let messageList = props.messagePage.messages.map(message => (<Message message={message.text} />));
  let onNewMessageChange = (event) => {
    props.dispatch(updateNewMessageCreator(event.target.value));
  }
  let sendMessage = ()=>{
    props.dispatch(sendMessageCreator());
  }
  return (
    <div className={classes.wrapper}>
      <div className={classes.dialogs_list}>
        {dialogsList}
      </div>
      <div className={classes.dialog}>
        {messageList}

        <p className={classes.new_message}>
          <textarea value={props.messagePage.newMessageBody} 
          onChange={onNewMessageChange}></textarea>
          <button onClick={sendMessage}>Send message</button>
        </p>



      </div>

    </div>
  )
}
export default Dialogs;