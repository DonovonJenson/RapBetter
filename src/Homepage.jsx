import React from 'react';

import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Navbar from './navbar.jsx';
import Raptools from './raptool.jsx';
import Videos from './videoList.jsx';
import About from './about.jsx';
import Courses from './courses.jsx';
import Homepagecontent from './homepagecontent.jsx';
import Header from './header.jsx'

class Homepage extends React.Component {
  constructor() {
    super();
    this.state = {
      videosOnVidsPage: [ 'ge0KWuwf1gA', '1auFCLoGOKs', 'dSM8EmIqpfE', 'QL-QFRKI0w4', '1auFCLoGOKs', 'GgYgX6xITIg', 'UXNfwCOSPTA', 'hJTWgEEviHc' ]
    };
  }
 
  render() {
    return (
      <div>
        <Router >
          <div>
            <Header/>
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
              <Route path="/videos" render={ () =><Videos videosToShow={this.state.videosOnVidsPage} /> } />
              <Route path="/about" component={About} />
              <Route path="/courses" component={Courses} />
              </div>
            </div>
          </div>
        </Router> 
      </div>
    );
  }
}




export default Homepage;