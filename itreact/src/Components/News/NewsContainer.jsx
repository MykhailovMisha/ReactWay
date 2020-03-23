import React from 'react';
import News from './News';
import { updateNewsActionCreator, addNewsActionCreator } from '../../redux/news-reducer';

const NewsContainer = (props) => {
    
    let state = props.store.getState().newsPage;

    let updateNews = (body) => {
        props.store.dispatch(updateNewsActionCreator(body))
    }

    let addNews = () => {
        props.store.dispatch(addNewsActionCreator())
    }

    return(
      <News 
      newsPage={state}
      addNews={addNews}
      updateNews={updateNews}
      />
    )
}

export default NewsContainer;