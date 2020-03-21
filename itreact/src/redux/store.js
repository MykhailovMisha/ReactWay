import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, alert: "Hi,howau", like: 12 },
        { id: 2, alert: "ItsMyFirstPrjct", like: 76 },
        { id: 3, alert: "Look at me now", like: 726 },
        { id: 4, alert: "message", like: 23 },
        { id: 5, alert: "lol", like: 43 }
      ],
      newPostText: ""
    },

    musicPage: {
      MusicData: [
        { id: 1, name: "props" },
        { id: 2, name: "react" },
        { id: 3, name: "redux" },
        { id: 4, name: "Ramil'" },
        { id: 5, name: "104" }
      ]
    },

    dialogsPage: {
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
  },
  _rerenderEntireTree() {
    console.log("state");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._rerenderEntireTree(this._state);
    }
};

window.store = store;
export default store;
