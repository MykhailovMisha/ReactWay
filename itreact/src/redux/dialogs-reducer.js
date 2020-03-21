
const  ADD_MSG = 'ADD-MSG';
const UPDATE_MSG = 'UPDATE-MSG';

let initialState = {
  dialogsData: [
    {
      id: 1,
      name: "Andrew",
      avatar:
        "https://en.facebookbrand.com/wp-content/uploads/2019/06/f_logo_RGB-Blue_512.png"
    },
    { id: 2, name: "Sasha" },
    { id: 3, name: "Dymich" },
    { id: 4, name: "Sveta" },
    { id: 5, name: "Valera" }
  ],
  messagesData: [
    { id: 1, message: "Mwssage one" },
    { id: 2, message: "Message two" },
    { id: 3, message: "Message three" },
    { id: 4, message: "Message four" },
    { id: 5, message: "Message five" }
  ],
  newMessageBody: ""
}

export const dialogsReducer = (state = initialState, action) => {
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


export default dialogsReducer

