import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogsData.map( d => 
  <DialogItem name={d.name} id={d.id} />
  ); 
  
  let messagesElements = state.messagesData.map( m =>  
  <Message id={m.id} message={m.message} /> 
  )


let newMessageElement = React.createRef();  


let onMessageChange = () => {
  let body = newMessageElement.current.value;
  props.updateMessageText(body)
}

let onAddMessage = () => {
  props.addMessage();
  newMessageElement.current.value = '';
}

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_item}>
          {dialogsElements}
      </div>
      <div className={classes.messages}>
          {messagesElements}
          <textarea onChange={onMessageChange} ref={newMessageElement}
          value={props.newMessageBody} placeholder="Write"></textarea>
          <div onClick={onAddMessage} className={classes.add_message}>Send message</div>
      </div>
    </div>
  );
};

export default Dialogs;
