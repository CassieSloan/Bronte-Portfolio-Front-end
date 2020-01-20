import React, {Component} from "react";
import {BrowserRouter, Link} from "react-router-dom";
import twitter from "./../../images/twitter.png"
import instagram from "./../../images/instagram.png"

import "./../../styles/shared/header_and_navbar.scss";

class Header extends Component {
    render() {
        return(
            <>
                <h1 className="header">BRONTE DAVIS</h1>
                <div className="navbar">
                    <div className="social-icons">
                        <div className="twitter" styles={{ backgroundImage:`image(${twitter})` }}></div>
                        <div className="instagram" styles={{ backgroundImage:`image(${instagram})` }}></div>
                        {/* <img src="src\images\twitter.png" alt="twitter" className="icon"/>
                        <img src="src\images\instagram.png" alt="instagram" className="icon"/> */}
                    </div>
                    <BrowserRouter>
                        <div className="pages">
                            <Link to="/" className="nav-link">Home</Link>
                            <Link to="/gallery" className="nav-link">Gallery</Link>
                            <Link to="/about" className="nav-link">About</Link>
                            <Link to="/contact" className="nav-link">Contact</Link>
                            <Link to="/blog" className="nav-link">Blog</Link>
                        </div>
                    </BrowserRouter>
                </div>
            </>
        )
    }
}

export default Header;