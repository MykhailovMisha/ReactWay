
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_TEXT = "UPDATE-NEW-TEXT"

const profileReducer = (state, action) => {
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

export default profileReducer;

