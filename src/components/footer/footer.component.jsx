import React from 'react';

import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png';

import './footer.styles.scss';

function Footer() {
    return (

        <footer className="section-divider-top footer-container">
            <Link to="/" className="brand-logo"><img src={ logo } alt="logo"/></Link>
            <div className="row footer-links">
                <div className="col-md-4"><Link to="/news" className="nav-link">News</Link></div>
                <div className="col-md-4"><Link to="/tips" className="nav-link">Tips</Link></div>
                <div className="col-md-4"><Link to="/about" className="nav-link">About</Link></div>
            </div>
        </footer>

    );
}

export default Footer;