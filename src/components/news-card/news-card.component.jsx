import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import ConvertDateTime from '../utils/utils';

import './news-card.styles.scss';

export const NewsCard = ({ news }) => {

    return(
        
        <div className="news-card-container col-md-4">
            <Link to={`/news/${news.id}`} style={{ textDecoration: 'none', color:'inherit' }}>
                <div className="news-card-body">
                    <p className="news-category">{ news.category }</p>
                    <p className="news-card-publishing-date">{ ConvertDateTime(news.date, { day: '2-digit', month: 'short', year: 'numeric', hour12: false }) }</p>
                    <hr className="news-card-hr" />
                    <div className="news-card-image">
                        {/* <img src={ news.image } alt={news.title}/> */}
                        <LazyLoadImage
                            src={news.image}
                            effect="blur"
                        />
                    </div>
                    <div className="news-card-text">
                        <h2>{ news.title }</h2>
                        <p>{ news.teaser }.</p>
                    </div>
                </div>
            </Link>
        </div>
      
    )
}