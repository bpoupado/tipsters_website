import React from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import './bookmaker.styles.scss';



function Bookmaker({bookmaker}) {

    return (
        <div className="news-card-container col-sm-6 col-md-6 col-lg-4">
            <a className="a-link" href={bookmaker.url} target="_blank" rel="noreferrer">
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
                                            alt={bookmaker.name}
                                            src={bookmaker.logo}
                                            effect='blur'
                                        />
                                    </span>
                                    <span className="tip-card-team-name">{ bookmaker.name }</span>
                                </div>
                                <div className="col-3 text-right">
                                    <span className="tip-card-team-name align-middle">{ bookmaker.odd }</span>
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
    );
}

export default Bookmaker;