
const  ADD_MSG = 'ADD-MSG';
const UPDATE_MSG = 'UPDATE-MSG';
const dialogsReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE-MSG":
      state.newMessageBody = action.text;
      return state;
    case "ADD-MSG":
      let newMsg = {
        id: 6,
        message: state.newMessageBody
      };
      state.messagesData.push(newMsg);
      state.newMessageBody = "";
      return state;
    default:
      return state;
  };
}

export const addMsgtActionCreator = () => {
  return {
    type: ADD_MSG
  }
}
export const updateMsgTextActionCreator = (body) =>
 ({type: UPDATE_MSG, text: body});


export default dialogsReducer;

