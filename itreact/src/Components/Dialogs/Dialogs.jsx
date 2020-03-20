import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message'


const Dialogs = (props) => {
  let dialogsElements = props.state.dialogsData.map( d => 
  <DialogItem name={d.name} id={d.id} />
  ); 
  
  let messagesElements = props.state.messagesData.map( m =>  
  <Message id={m.id} message={m.message} /> 
  )
  
let newMessageElement = React.createRef();  


let onMessageChange = () => {
  let body = newMessageElement.current.value;
  props.dispatch({type: 'UPDATE-MSG', body: body});
}

let addMessage = () => {
  props.dispatch({type: 'ADD-MSG'})
}

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_item}>
          {dialogsElements}
      </div>
      <div className={classes.messages}>
          {messagesElements}
          <textarea onChange={onMessageChange} ref={newMessageElement}></textarea>
          <div onClick={addMessage} className={classes.add_message}>Send message</div>
      </div>
    </div>
  );
};

export default Dialogs;
