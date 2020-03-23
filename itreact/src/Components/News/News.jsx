import React from 'react';
import classes from  './News.module.css';
import Newses from './Newses/Newses';

const News = (props) => {
let state = props.newsPage

    let newsElements = state.newsData.map( n => 
        <Newses title={n.title} subtitle={n.subtitle}/>
    );

    let newNewsElement = React.createRef();

    let onUpdateNews = () => {
        let body = newNewsElement.current.value;
        props.updateNews(body)
    }
    let onAddNews = () => {
        props.addNews();
        newNewsElement.current.value = '';
    }
    return(
        <div>
            <h1 className={classes.title}>
                News page
            </h1>
            {newsElements}
            <textarea onChange={onUpdateNews} ref={newNewsElement}></textarea>
            <button onClick={onAddNews}></button>
        </div>
    )
}

export default News;