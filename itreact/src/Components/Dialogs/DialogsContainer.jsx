import React from "react";
import {addMsgtActionCreator, updateMsgTextActionCreator} from '../../redux/dialogs-reducer'
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

  let state = props.store.getState().dialogsPage;

  let updateMessageText = (body) => {
  props.store.dispatch(updateMsgTextActionCreator(body))
  }

  let addMessage = () => {
  props.store.dispatch(addMsgtActionCreator())
  }

  return (
  <Dialogs 
  dialogsPage={state}
  addMessage={addMessage}
  updateMessageText={updateMessageText} 
    />
  );
};

export default DialogsContainer;