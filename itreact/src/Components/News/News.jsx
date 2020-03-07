import React from 'react';
import classes from  './News.module.css';
import Newses from './Newses/Newses';

const News = (props) => {

    let newsData = [
        { title: "Kronavirus", subtitle: "infected 86k" },
        { title: "Cancer", subtitle: "infected 286k" },
        { title: "Grip", subtitle: "infected 486k" },
        { title: "Kor", subtitle: "infected 586k" }
    ]

    let newsElements = newsData.map( (news) => 
        <Newses title={news.title} subtitle={news.subtitle}/>
    )

    return(
        <div>
            <h1 className={classes.title}>
                News page
            </h1>
            <Newses title='Kronavirus' subtitle= "now 86 000 infected"/>
            <Newses title='Cancer' subtitle= "now 286 000 infected"/>
            <Newses title='Grip' subtitle= "now 826 000 infected"/>
            <Newses title='Kor' subtitle= "now 626 000 infected"/>
        </div>
    )
}

export default News;