import React, {Component} from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";

import "./../../styles/shared/header_and_navbar.scss";

class Header extends Component {
    render() {
        return(
            <>
                <h1 className="header">BRONTE DAVIS</h1>
                <div>
                    <BrowserRouter>
                        <Link to="/">Home</Link>
                        <Link to="/gallery">Gallery</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/blog">Blog</Link>
                    </BrowserRouter>
                    
                </div>
            </>
        )
    }
}

export default Header;