
import React from "react";
import {addMsgtActionCreator, updateMsgTextActionCreator} from '../../redux/dialogs-reducer'
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
debugger;
  let state = props.store.getState().dialogsPage;

let onMessageChange = (body) => {
  // let action = updateMsgTextActionCreator(body);
  // props.store.dispatch(action)
  props.store.dispatch(updateMsgTextActionCreator(body))
}

let addMessage = () => {
  props.store.dispatch(addMsgtActionCreator())
}
  return (
  <Dialogs 
  dialogsPage={state}
  addMessage={addMessage}
  updateMessageText={onMessageChange} 
  //  newMessageBody={state.DialogsPage.newMessageBody}
  />
  );
};

export default DialogsContainer;
