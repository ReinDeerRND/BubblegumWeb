import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css'
import Message from './Message/Message';

const Dialogs = (props) => {
  let dialogsList = props.dialogs.map(dialog => (<DialogItem name={dialog.name} id={dialog.id} />));
  let messageList = props.messages.map(message => (<Message message={message.text} />));
  
  let onNewMessageChange = (event) => {
    let newMessageText = event.target.value
    props.updateMessageChange(newMessageText);
  }
  let onSendMessage = ()=>{
    props.sendMessage();
  }
  return (
    <div className={classes.wrapper}>
      <div className={classes.dialogs_list}>
        {dialogsList}
      </div>
      <div className={classes.dialog}>
        {messageList}
        <p className={classes.new_message}>
          <textarea value={props.newMessageBody} 
          onChange={onNewMessageChange}></textarea>
          <button onClick={onSendMessage}>Send message</button>
        </p>
      </div>
    </div>
  )
}
export default Dialogs;