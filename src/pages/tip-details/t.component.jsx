import React, { useState, useEffect } from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import LoadingIcon from '../../components/loading-icon/loading-icon.component';

import Tips from '../tips/tips.component';

import ConvertDateTime from '../../components/utils/utils';

import './tip-details.styles.scss';


function T({match}) {

    const [news_details, setNewsDetails] = useState([]);
    const [rendering, setRendering] = useState(true);

    useEffect(() => {
        const fetchNewsDetails = async () => {
            const data = await fetch(`http://localhost/api/news.php?id=${match.params.id}`);
            const news_details = await data.json();
            setNewsDetails(news_details);
            setRendering(false);
        }
        fetchNewsDetails(match.params.id);
    },[match.params.id]);

    if(!rendering){
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
                    
                    



























                    <div className="news-card-container col-sm-6 col-md-6 col-lg-4">
                        <a className="a-link" href="!#" target="_blank" rel="noreferrer">
                            <div className="news-card-body">
                                <div className="d-flex">
                                    <p className="tip-card-header-text col-6 text-left"></p>
                                    <p className="tip-card-header-text col-6 text-right"></p>
                                </div>
                            
                                <hr className="news-card-hr" />
                                <div className="news-card-image">
                                    <div className="row text-center vertical-align-center">

                                        <div className="col-md-12 mb-2 d-flex text-left media-body">
                                            <div className="col-9 text-left">
                                                <span>
                                                    <LazyLoadImage
                                                        className="bookmaker-card-team-logo"
                                                        alt="TEST"
                                                        src="https://cdn.casinomentor.com/casino-logo/snai-casino-logo.png"
                                                        effect='blur'
                                                    />
                                                </span>
                                                <span className="tip-card-team-name">SNAI</span>
                                            </div>
                                            <div className="col-3 text-right">
                                                <span className="tip-card-team-name align-middle">1.5</span>
                                            </div>
                                        </div>
                                        
                                    </div>

                                    <div className="row text-center mt-2">
                                        <div className="col-md-12">
                                            <button className="tip-card-button">Faz a tua aposta!</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="news-card-container col-sm-6 col-md-6 col-lg-4">
                        <a className="a-link" href="!#" target="_blank" rel="noreferrer">
                            <div className="news-card-body">
                                <div className="d-flex">
                                    <p className="tip-card-header-text col-6 text-left"></p>
                                    <p className="tip-card-header-text col-6 text-right"></p>
                                </div>
                            
                                <hr className="news-card-hr" />
                                <div className="news-card-image">
                                    <div className="row text-center vertical-align-center">

                                        <div className="col-md-12 mb-2 d-flex text-left media-body">
                                            <div className="col-9 text-left">
                                                <span>
                                                    <LazyLoadImage
                                                        className="bookmaker-card-team-logo"
                                                        alt="TEST"
                                                        src="https://cdn.casinomentor.com/casino-logo/snai-casino-logo.png"
                                                        effect='blur'
                                                    />
                                                </span>
                                                <span className="tip-card-team-name">SNAI</span>
                                            </div>
                                            <div className="col-3 text-right">
                                                <span className="tip-card-team-name align-middle">1.5</span>
                                            </div>
                                        </div>
                                        
                                    </div>

                                    <div className="row text-center mt-2">
                                        <div className="col-md-12">
                                            <button className="tip-card-button">Faz a tua aposta!</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="news-card-container col-sm-6 col-md-6 col-lg-4">
                        <a className="a-link" href="!#" target="_blank" rel="noreferrer">
                            <div className="news-card-body">
                                <div className="d-flex">
                                    <p className="tip-card-header-text col-6 text-left"></p>
                                    <p className="tip-card-header-text col-6 text-right"></p>
                                </div>
                            
                                <hr className="news-card-hr" />
                                <div className="news-card-image">
                                    <div className="row text-center vertical-align-center">

                                        <div className="col-md-12 mb-2 d-flex text-left media-body">
                                            <div className="col-9 text-left">
                                                <span>
                                                    <LazyLoadImage
                                                        className="bookmaker-card-team-logo"
                                                        alt="TEST"
                                                        src="https://cdn.casinomentor.com/casino-logo/snai-casino-logo.png"
                                                        effect='blur'
                                                    />
                                                </span>
                                                <span className="tip-card-team-name">SNAI</span>
                                            </div>
                                            <div className="col-3 text-right">
                                                <span className="tip-card-team-name align-middle">1.5</span>
                                            </div>
                                        </div>
                                        
                                    </div>

                                    <div className="row text-center mt-2">
                                        <div className="col-md-12">
                                            <button className="tip-card-button">Faz a tua aposta!</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="news-card-container col-sm-6 col-md-6 col-lg-4">
                        <a className="a-link" href="!#" target="_blank" rel="noreferrer">
                            <div className="news-card-body">
                                <div className="d-flex">
                                    <p className="tip-card-header-text col-6 text-left"></p>
                                    <p className="tip-card-header-text col-6 text-right"></p>
                                </div>
                            
                                <hr className="news-card-hr" />
                                <div className="news-card-image">
                                    <div className="row text-center vertical-align-center">

                                        <div className="col-md-12 mb-2 d-flex text-left media-body">
                                            <div className="col-9 text-left">
                                                <span>
                                                    <LazyLoadImage
                                                        className="bookmaker-card-team-logo"
                                                        alt="TEST"
                                                        src="https://cdn.casinomentor.com/casino-logo/snai-casino-logo.png"
                                                        effect='blur'
                                                    />
                                                </span>
                                                <span className="tip-card-team-name">SNAI</span>
                                            </div>
                                            <div className="col-3 text-right">
                                                <span className="tip-card-team-name align-middle">1.5</span>
                                            </div>
                                        </div>
                                        
                                    </div>

                                    <div className="row text-center mt-2">
                                        <div className="col-md-12">
                                            <button className="tip-card-button">Faz a tua aposta!</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="news-card-container col-sm-6 col-md-6 col-lg-4">
                        <a className="a-link" href="!#" target="_blank" rel="noreferrer">
                            <div className="news-card-body">
                                <div className="d-flex">
                                    <p className="tip-card-header-text col-6 text-left"></p>
                                    <p className="tip-card-header-text col-6 text-right"></p>
                                </div>
                            
                                <hr className="news-card-hr" />
                                <div className="news-card-image">
                                    <div className="row text-center vertical-align-center">

                                        <div className="col-md-12 mb-2 d-flex text-left media-body">
                                            <div className="col-9 text-left">
                                                <span>
                                                    <LazyLoadImage
                                                        className="bookmaker-card-team-logo"
                                                        alt="TEST"
                                                        src="https://cdn.casinomentor.com/casino-logo/snai-casino-logo.png"
                                                        effect='blur'
                                                    />
                                                </span>
                                                <span className="tip-card-team-name">SNAI</span>
                                            </div>
                                            <div className="col-3 text-right">
                                                <span className="tip-card-team-name align-middle">1.5</span>
                                            </div>
                                        </div>
                                        
                                    </div>

                                    <div className="row text-center mt-2">
                                        <div className="col-md-12">
                                            <button className="tip-card-button">Faz a tua aposta!</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>








                </div>
            </div>
        );
    }else{
        return (<LoadingIcon/>)
    }
}

export default T;