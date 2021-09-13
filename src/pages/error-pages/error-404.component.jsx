import React from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import red_card_image from '../../assets/images/red_card.png';

function Error404() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1 className="under-construction-title">Error 404</h1>
                    <p>The page you are trying to reach could not be found.</p>
                    <LazyLoadImage
                        className="under-construction-image"
                        alt="under-construction-image"
                        src={red_card_image}
                        effect='blur'
                    />
                </div>
            </div>
        </div>
    );
}

export default Error404;