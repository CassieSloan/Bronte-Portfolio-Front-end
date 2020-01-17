import React, {Component} from "react";
import Header from "./shared/Header"; //header and navbar
import Home from "./pages/Home"; //homepage
import Gallery from "./pages/Gallery"; //gallery
import Contact from "./pages/Contact"; //contact

import {BrowserRouter, Route, Switch} from "react-router-dom";


class App extends Component {
    render() {
        return(
            <>
                <Header/> 
                <BrowserRouter>
                    <Switch>
                        
                        <Route exact path="/">
                            <Home/>
                        </Route>

                        <Route exact path="/gallery">
                            <Gallery/>
                        </Route>

                        <Route exact path="/contact">
                            <Contact/>
                        </Route>
    
                    </Switch>
                </BrowserRouter>
            </>
        )
    }
}

export default App;