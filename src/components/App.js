import React, {Component} from "react";
import Header from "./shared/Header";
import Home from "./pages/Home";
import {BrowserRouter, Route, Link} from "react-router-dom";


class App extends Component {
    render() {
        return(
            <>
                <Header/>
                <BrowserRouter>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                </BrowserRouter>
            </>
        )
    }
}

export default App;