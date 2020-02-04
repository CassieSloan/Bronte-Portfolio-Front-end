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
        {/* R O U T I N G */}
        <BrowserRouter>
          <Header />

          <Switch>
            {/* H O M E */}
            <Route exact path="/">
              <Home />
            </Route>
            {/* G A L L E R Y */}
            <Route exact path="/gallery">
              <Gallery />
            </Route>
            {/* C A T E G O R Y   P A G E S */}
            <Route exact path="/gallery/portrait">
              <Gallery />
              <Genre />
            </Route>

            <Route exact path="/gallery/editorial">
              <Gallery />
              <Genre />
            </Route>

            <Route exact path="/gallery/landscape">
              <Gallery />
              <Genre />
            </Route>

            <Route exact path="/gallery/blackandwhite">
              <Gallery />
              <Genre />
            </Route>
            {/* C O N T A C T */}
            <Route exact path="/contact">
              <Contact />
            </Route>
            {/* BLOG */}
            <Route exact path="/blog">
              <Blog />
            </Route>

            <Route exact path="/about">
              <Aboutme />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
