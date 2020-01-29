import React, { Component } from "react";
import Header from "./shared/Header"; //header and navbar
import Home from "./pages/Home"; //homepage
import Gallery from "./pages/Gallery"; //gallery
import Contact from "./pages/Contact"; //contact
import Blog from "./pages/Blog"; //blog
import Aboutme from "./pages/About_me"; //about me
import Genre from "./pages/gallery_genres/Genre";
import Footer from "./shared/Footer";

import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        {/* R O U T I N G */}
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/gallery">
              <Gallery />
            </Route>

            <Route exact path="/gallery/portrait">
              <Genre />
            </Route>

            <Route exact path="/contact">
              <Contact />
            </Route>

            <Route exact path="/blog">
              <Blog />
            </Route>

            <Route exact path="/about">
              <Aboutme />
            </Route>
          </Switch>
        </BrowserRouter>
        <Footer />
      </>
    );
  }
}

export default App;
