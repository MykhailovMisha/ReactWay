import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message'


const Dialogs = (props) => {
  let dialogsElements = props.dialogsData.map( d => 
  <DialogItem name={d.name} id={d.id} />
  ); 
  
  let messagesElements = props.messagesData.map( m =>  
  <Message id={m.id} message={m.message} /> 
  )
  



  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_item}>
          {dialogsElements}
      </div>
      <div className={classes.messages}>
          {messagesElements}
      </div>
    </div>
  );
};

export default Dialogs;
