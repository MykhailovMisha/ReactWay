import React from 'react';
import News from './News';
import { updateNewsActionCreator, addNewsActionCreator } from '../../redux/news-reducer';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return{
      newsPage: state.newsPage
    }
  }
  let mapDispatchToProps = (dispatch) => {
    return{
        updateNews: (body) => {
            dispatch(updateNewsActionCreator(body))
        },
        addNews: () => {
            dispatch(addNewsActionCreator())
        }
      }
  }


const NewsContainer = connect(mapStateToProps,mapDispatchToProps)(News)

export default NewsContainer;