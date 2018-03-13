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
            <div className='navplaceholder item-flex-grow'></div>
                <div><Link className='navbutton' to="/">Home Page</Link></div>
                <div><Link className='navbutton' to="/raptool">Rap Tool</Link></div>
                <div><Link className='navbutton' to="/videos">Videos</Link></div>
                <div><Link className='navbutton' to="/about">About</Link></div>
            </div>
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