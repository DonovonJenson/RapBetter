import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, hashHistory } from 'react-router-dom';

import Navigation from './components/Navigation/index.jsx';

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
            <Route exact path="/" render={() => <div className="jumbotron">Home</div>} />
            <Route path="/tool" render={() => <div className="jumbotron">Rap Tool</div>} />
            <Route path="/videos" render={() => <div className="jumbotron">Videos</div>} />
            <Route path="/about" render={() => <div className="jumbotron">About</div>} />
            <Route path="/courses" render={() => <div className="jumbotron">Courses</div>} />
          </Switch>
        </Router> 

      </div>

    );

  }
};

// The front end for this one will be page / component based
// Each route will link to a new page
  // each page will be composed of components