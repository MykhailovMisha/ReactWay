
import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {addMsgtActionCreator, updateMsgTextActionCreator} from '../../redux/dialogs-reducer'


const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogsData.map( d => 
  <DialogItem name={d.name} id={d.id} />
  ); 
  
  let messagesElements = props.dialogsPage.messagesData.map( m =>  
  <Message id={m.id} message={m.message} /> 
  )
  
let newMessageElement = React.createRef();  


let onMessageChange = () => {
  let body = newMessageElement.current.value;
  props.dispatch(updateMsgTextActionCreator(body));
}

let addMessage = () => {
  props.dispatch(addMsgtActionCreator())
  newMessageElement.current.value = ''
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
          <div onClick={addMessage} className={classes.add_message}>Send message</div>
      </div>
    </div>
  );
};

export default Dialogs;
