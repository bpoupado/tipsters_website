import React, { useState, useEffect } from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import LoadingIcon from '../../components/loading-icon/loading-icon.component';

import { Counter } from '../../components/counter/counter.component';

import Bookmaker from '../../components/bookmaker/bookmaker.component';

// import ConvertDateTime from '../../components/utils/utils';

import './tip-details.styles.scss';


function TipDetails({match}) {

    const [tip_details, setTipDetails] = useState([]);
    const [rendering, setRendering] = useState(true);

    useEffect(() => {
        const fetchNewsDetails = async () => {
            const data = await fetch(`http://localhost/api/tips.php?id=${match.params.id}`);
            const tip_details = await data.json();
            console.log(tip_details);
            setTipDetails(tip_details);
            setRendering(false);
        }
        fetchNewsDetails(match.params.id);
    },[match.params.id]);

    if(!rendering){
        return (
            <div className="container division-padding">

                <div className="row">
                    <div className="news-details-card-container col-md-12 col-lg-12">
                        <div className="tip-details-body">

                            <div className="row">

                                <div className="col-md-12 tip-details-counter text-center mb-2">
                                    <Counter time={tip_details.match_date}/>
                                </div>

                                <div className="col-4 text-center">
                                    <LazyLoadImage
                                        className="tip-team-logo"
                                        alt={tip_details.teams['home_team_name']}
                                        src={tip_details.teams['home_team_logo']}
                                        effect='blur'
                                    />
                                </div>
                                
                                <div className="col-4 text-center">
                                    <p className="tip-versus">VS</p>
                                </div>

                                <div className="col-4 text-center">
                                    <LazyLoadImage
                                        className="tip-team-logo"
                                        alt={tip_details.teams['away_team_name']}
                                        src={tip_details.teams['away_team_logo']}
                                        effect='blur'
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-4 text-center">
                                    <p className="tip-team-name">{tip_details.teams['home_team_name']}</p>
                                </div>

                                <div className="col-4 text-center">
                                    <p className="tip-score">0 - 0</p>
                                </div>

                                <div className="col-4 text-center">
                                    <p className="tip-team-name">{tip_details.teams['away_team_name']}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="row tip-section-spacing">
                    <div className="news-details-card-container col-md-12 col-lg-12">
                        <div className="tip-details-body">

                            <div className="col-md-12 tip-details-title">
                                Tip
                            </div>
                            <div className="col-md-12">
                                <div className="tip-analysis">
                                    { tip_details.analysis }
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="row tip-section-spacing">
                    <div className="col-md-12 tip-details-title">
                        Bookmakers
                    </div>
                    {
                        tip_details['bookmakers'].map(bookmaker => (
                            <Bookmaker key={bookmaker.id} countdown={tip_details.match_date} bookmaker={bookmaker}/>
                        ))
                    }
                 </div>

            </div>
        );
    }else{
        return (<LoadingIcon/>)
    }
}

export default TipDetails;