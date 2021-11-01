import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css'
import Message from './Message/Message';

const Dialogs = (props) => {
let dialogsList = props.messagePage.dialogs.map(dialog =>(<DialogItem name={dialog.name} id={dialog.id} />));
let messageList = props.messagePage.messages.map(message =>(<Message message={message.text} />));

  return (
    <div className={classes.wrapper}>
      <div className={classes.dialogs_list}>
        {dialogsList}
      </div>
      <div className={classes.dialog}>
        {messageList}
      </div>
    </div>
  )
}
export default Dialogs;