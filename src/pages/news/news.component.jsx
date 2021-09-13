import React, { useState, useEffect } from 'react';

import './news.styles.scss';

import { NewsCard } from '../../components/news-card/news-card.component';

import LoadingIcon from '../../components/loading-icon/loading-icon.component';


function News() {

    useEffect(() => {
        fetchNews();
    },[]);

    const [news, setNews] = useState([]);
    const [rendering, setRendering] = useState(true);

    const fetchNews = async () => {
        const data = await fetch('https://tipsters.digitalwizard.pt/react/api/news.php');
        console.log(data);
        const news = await data.json();
        setNews(news);
        setRendering(false);

        console.log(news);
        
    }
    if(!rendering){
        return (
            
            <div className="container section-divider">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Latest News</h1>
                    </div>
                </div>
                <div className="row">
                    {
                        news.map(news => (
                            <NewsCard key={news.id} news={news} />
                        ))
                    }
                </div>
            </div>
        );
    }else{
        return (<LoadingIcon/>)
    }
}

export default News;