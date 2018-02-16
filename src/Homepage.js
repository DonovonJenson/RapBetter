import React from 'react';

import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Navbar from './navbar.js';
import Raptools from './raptool.js';
import Videos from './videos.js';
import About from './about.js';
import Homepagecontent from './homepagecontent.js';

class Homepage extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }
 
  render() {
    return (
      <div>
        <Router >
          <div>
            <div className = 'navbar'>
                <div className = 'navbutton'><Link to="/">Home Page</Link></div>
                <div className = 'navbutton'><Link to="/raptool">Rap Tool</Link></div>
                <div className = 'navbutton'><Link to="/videos">Videos</Link></div>
                <div className = 'navbutton'><Link to="/about">About</Link></div>
            </div>
            <Route exact path="/" component={Homepagecontent} />
            <Route path="/raptool" component={Raptools} />
            <Route path="/videos" component={Videos} />
            <Route path="/about" component={About} />
          </div>
        </ Router>
        <p id = "testme">Test words</p>
      </div>
    );
  }
}


export default Homepage;