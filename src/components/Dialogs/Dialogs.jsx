import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css'
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';

const Dialogs = (props) => {

  let dialogsList = props.dialogs.map(dialog => (<DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />));
  let messageList = props.messages.map(message => (<Message message={message.text} key={message.id} />));

  let onSubmit = (newMessage) => {
    console.log(newMessage);
    props.sendMessage(newMessage);
  }
  return (
    <div className={classes.wrapper}>
      <div className={classes.dialogs_list}>
        {dialogsList}
      </div>
      <div className={classes.dialog}>
        {messageList}
        <div className={classes.new_message}>
          <NewMessageFormRedux onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  )
}

const NewMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={classes.new_message}>
      <Field component="textarea" name="newMessage" placeholder="Input new message"></Field>
      <button type="submit">Send message</button>
    </form>
  )
}

const NewMessageFormRedux = reduxForm({ form: "newMessage" })(NewMessageForm);

export default Dialogs;