import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, hashHistory } from 'react-router-dom';

import Home from './pages/Home';
import Tool from './pages/Tool';
import Videos from './pages/Videos';
import About from './pages/About';
import Courses from './pages/Courses';

import Navigation from './components/Navigation';
import Footer from './components/Footer';

import './sass/main.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    return (

      <div className="content-body">

        <Navigation
          isMobile={isMobile}
        />

        <div className="navigation-gutter"/>
        
        <Router history={hashHistory}> 
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/tool" component={Tool} />
            <Route path="/videos" component={Videos} />
            <Route path="/about" component={About} />
            <Route path="/courses" component={Courses} />
          </Switch>
        </Router> 

        <Footer />

      </div>

    );

  }
};

// The front end for this one will be page / component based
// Each route will link to a new page
  // each page will be composed of components