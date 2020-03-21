
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_TEXT = "UPDATE-NEW-TEXT"

const initialState = {
  postData: [
    { id: 1, alert: "Hi,howau", like: 12 },
    { id: 2, alert: "ItsMyFirstPrjct", like: 76 },
    { id: 3, alert: "Look at me now", like: 726 },
    { id: 4, alert: "message", like: 23 },
    { id: 5, alert: "lol", like: 43 }
  ],
  newPostText: ""
}
 export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-POST":
      let newPost = {
        id: 5,
        alert: state.newPostText,
        like: 0
      };
      state.postData.push(newPost);
      state.newPostText = "";
      return state;
    case "UPDATE-NEW-TEXT":
      state.newPostText = action.NewText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}
export const updatePostTextActionCreator = (text) =>
 ({type: UPDATE_NEW_TEXT, NewText: text});


