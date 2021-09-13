import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import LoadingIcon from '../../components/loading-icon/loading-icon.component';

import Tips from '../tips/tips.component';



import ConvertDateTime from '../../components/utils/utils';

import './news-details.styles.scss';


function NewsDetails({match}) {

    const [news_details, setNewsDetails] = useState([]);
    const [rendering, setRendering] = useState(true);

    useEffect(() => {
        const fetchNewsDetails = async () => {
            const data = await fetch(`https://tipsters.digitalwizard.pt/react/api/news.php?id=${match.params.id}`);
            const news_details = await data.json();

            console.log(news_details['errors']);

            setNewsDetails(news_details);
            setRendering(false);
        }
        fetchNewsDetails(match.params.id);
    },[match.params.id]);

    if(!rendering){


        if(news_details['errors']){
            return <Redirect to="/error404" />;
        }else{
            return (
                <div className="container division-padding">
                    <div className="row">
                        <div className="news-details-card-container col-md-12 col-lg-12">
                            <div className="news-details-card-body">
                                <div className="news-details-card-text">
                                    <h2>{ news_details.title }</h2>
                                    <p>{ news_details.teaser }.</p>
                                </div>
    
                                <p className="news-category">{ news_details.category }</p>
                                <p className="news-card-publishing-date">{ ConvertDateTime(news_details.date, { day: '2-digit', month: 'short', year: 'numeric', hour12: false }) }</p>
                                <hr className="news-card-hr" />
                                <div className="news-card-image">
                                    {/* <img src={ news_details.image } alt={news_details.title}/> */}
                                    <LazyLoadImage
                                        alt={news_details.title}
                                        src={news_details.image}
                                        effect='blur'
                                    />
                                </div>
                                <div className="news-details-text-container">
                                    { news_details.text }
                                </div>
                            </div>
                        </div>
                        <Tips/>
                    </div>
                </div>
            );
        }


    }else{
        return (<LoadingIcon/>)
    }
}

export default NewsDetails;