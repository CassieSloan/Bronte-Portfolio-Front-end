import React, {Component} from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";

import "./../../styles/shared/header_and_navbar.scss";

class Header extends Component {
    render() {
        return(
            <>
                <h1 className="header">BRONTE DAVIS</h1>
                <div className="navbar">
                    <div className="social-icons">
                        <img src="src\images\twitter.png" alt="twitter" className="icon"/>
                        <img src="src\images\instagram.png" alt="instagram" className="icon"/>
                    </div>
                    <BrowserRouter className="pages">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/gallery" className="nav-link">Gallery</Link>
                        <Link to="/about" className="nav-link">About</Link>
                        <Link to="/contact" className="nav-link">Contact</Link>
                        <Link to="/blog" className="nav-link">Blog</Link>
                    </BrowserRouter>
                </div>
            </>
        )
    }
}

export default Header;