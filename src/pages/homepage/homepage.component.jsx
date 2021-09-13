import React from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import under_construction from '../../assets/images/under_construction.gif';

import './homepage.styles.scss';

function Homepage() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1 className="under-construction-title">Welcome to TipstersWebsite</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center">
                  <LazyLoadImage
                    className="under-construction-image"
                    alt="Under Construction"
                    src={under_construction}
                    effect='blur'
                  />
                </div>
            </div>
        </div>
    );
}

export default Homepage;