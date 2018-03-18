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
          <div className="main-grid-container">
            <div className='main-nav-header navbar'>
                <div><Link className='nav__button nav__button__first' to="/">Home Page</Link></div>
                <div><Link className='nav__button' to="/raptool">Rap Tool</Link></div>
                <div><Link className='nav__button' to="/videos">Videos</Link></div>
                <div><Link className='nav__button' to="/about">About</Link></div>
                <div><Link className='nav__button nav__button__last' to="/courses">COURSES</Link></div>
            </div>
            <div className="main-nav-content">
            <Route exact path="/" component={Homepagecontent} />
            <Route path="/raptool" component={Raptools} />
            <Route path="/videos" component={Videos} />
            <Route path="/about" component={About} />
            </div>
          </div>
        </Router>
       
      </div>
    );
  }
}


export default Homepage;