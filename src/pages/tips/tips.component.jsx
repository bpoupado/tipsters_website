import React, { useState, useEffect } from 'react';

import './tips.styles.scss';

import { TipsCard } from '../../components/tips-card/tips-card.component';

import LoadingIcon from '../../components/loading-icon/loading-icon.component';

function Tips() {

    useEffect(() => {
        fetchTips();
    },[]);

    const [tips, setTips] = useState([]);
    const [rendering, setRendering] = useState(true);

    const fetchTips = async () => {
        const data = await fetch('https://tipsters.digitalwizard.pt/react/api/tips.php');
        console.log(data);
        const tips = await data.json();
        setTips(tips);
        setRendering(false);

        console.log(tips);
    }
    
    if(!rendering){
        return (
            
            <div className="container section-divider">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Latest Tips</h1>
                    </div>
                </div>
                <div className="row">
                    {
                        tips.map(tips => (
                            <TipsCard key={tips.id} tips={tips} />
                        ))
                    }
                </div>
            </div>
        );
    }else{
        return (<LoadingIcon/>)
    }
}

export default Tips;