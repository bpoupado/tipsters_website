import React from 'react';

import { Link } from 'react-router-dom';

import { Counter } from '../counter/counter.component';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import ConvertDateTime from '../utils/utils';

import './tips-card.styles.scss';



export const TipsCard = ({ tips }) => {

    return(
        
        <div className="news-card-container col-sm-6 col-md-6 col-lg-4">
            <Link to={`/tip/${tips.id}`} style={{ textDecoration: 'none', color:'inherit' }}>
                <div className="news-card-body">
                    <div className="d-flex">
                        <p className="tip-card-header-text col-6 text-left">{ ConvertDateTime(tips.match_date, { day: '2-digit', month: 'short', year: 'numeric', hour12: false }) }</p>
                        <p className="tip-card-header-text col-6 text-right">{ ConvertDateTime(tips.match_date, { hour: 'numeric', minute: 'numeric', hour12: false }) }</p>
                    </div>
                  
                    <hr className="news-card-hr" />
                    <div className="news-card-image">
                        <div className="row text-center">

                            {/* <div className="col-md-12">
                                <span className="tip-card-tip-type">{ tips.tip_type }</span>
                            </div> */}

                            <div className="col-md-12 mb-2 d-flex text-left">
                                <div className="col-12">
                                    <span>
                                        {/* <img className="tip-card-team-logo" src={ tips.teams.home_team_logo } alt={ tips.teams.home_team_logo }/> */}
                                        <LazyLoadImage
                                            className="tip-card-team-logo"
                                            alt={tips.teams.home_team_name}
                                            src={tips.teams.home_team_logo}
                                            effect='blur'
                                        />
                                    </span>
                                    <span className="tip-card-team-name">{ tips.teams.home_team_name }</span>
                                </div>
                            </div>

                            <div className="col-md-12 mb-2 d-flex text-left">
                                <div className="col-12">
                                    <span>
                                        {/* <img className="tip-card-team-logo" src={ tips.teams.away_team_logo } alt={ tips.teams.away_team_logo }/> */}
                                        <LazyLoadImage
                                            className="tip-card-team-logo"
                                            alt={tips.teams.away_team_name}
                                            src={tips.teams.away_team_logo}
                                            effect='blur'
                                        />
                                    </span>
                                    <span className="tip-card-team-name">{ tips.teams.away_team_name }</span>
                                </div>
                            </div>
                        </div>
                        <table>
                            <tbody className="text-center">
                            <tr>
                                {/* <Counter time={tips.match_time}/> */}
                            </tr>
                            </tbody>
                        </table>

                        <div className="col-md-12 mb-2 text-center">
                            <div className="col-12">
                                <Counter time={tips.match_date}/>
                            </div>
                        </div>

                        <div className="row text-center mt-2">
                            <div className="col-md-12">
                                <button className="tip-card-button">Ver Detalhes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
      
    )
}