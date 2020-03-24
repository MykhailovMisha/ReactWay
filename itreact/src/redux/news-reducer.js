const ADD_NEWS = "ADD-NEWS";
const UPDATE_NEWS = "UPDATE-NEWS";

let initialState = {
  newsData: [
    { id: 1,title: "Kronavirus", subtitle: "infected 306k" },
    { id: 2, title: "Cancer", subtitle: "infected 286k" },
    { id: 3, title: "Grip", subtitle: "infected 486k" },
    { id: 4, title: "Kor", subtitle: "infected 586k" },
  ],
  newNewsText: ""
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE-NEWS":
      return{
        ...state,
        newNewsText: action.text
      }
  
    case "ADD-NEWS":
      let newNews = {
        id: 5,
        title: state.newNewsText,
        subtitle: state.newNewsText
      };
      return{
      ...state,
      newsData: [...state.newsData, newNews],
      newNewsText: '',
      }
    default:
      return state;
  }
};

export const addNewsActionCreator = () => {
  return {
    type: ADD_NEWS
  };
};
export const updateNewsActionCreator = (body) => 
    ({type: UPDATE_NEWS, text: body})

export default newsReducer;
