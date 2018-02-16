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
          <ul>
          <li><Link to="/">Home Page</Link></li>
          <li><Link to="/raptool">Rap Tool</Link></li>
          <li><Link to="/videos">Videos</Link></li>
          <li><Link to="/about">About</Link></li>
          </ul>
          <Route exact path="/" component={Homepagecontent} />
          <Route path="/raptool" component={Raptools} />
          <Route path="/videos" component={Videos} />
          <Route path="/about" component={About} />
          </div>
      </ Router>


       
      </div>
    );
  }
}


export default Homepage;