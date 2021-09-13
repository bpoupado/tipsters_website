import React from 'react';

import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png';

import './navigation.styles.scss';

function Navigation() {
    return (

        <div className="division-padding">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top menu-bar">

                <Link to="/" className="brand-logo"><img src={ logo } alt="logo"/></Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* <ul className="navbar-nav mr-auto">

                        <li className="nav-item active">
                            <Link to="/news"><a className="nav-link menu-link" href="#">News</a></Link>
                        </li>

                        <li className="nav-item active">
                            <Link to="/tips"><a className="nav-link menu-link" href="#">Tips</a></Link>
                        </li>

                    </ul> */}

                    <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
                        <li className="nav-item">
                            <Link to="/news" className="nav-link menu-link">News</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/tips" className="nav-link menu-link">Tips</Link>
                        </li>
                    </ul>

                </div>

            </nav>
        </div>

    );
}

export default Navigation;