import { createStore, combineReducers } from "redux";
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {newsReducer} from './news-reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    newsPage: newsReducer
}); 

export let store = createStore(reducers);