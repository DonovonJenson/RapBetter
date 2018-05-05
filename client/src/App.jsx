import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, hashHistory } from 'react-router-dom';

import './sass/main.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (

      <div>

        {/* Navigation Component Here */}

        <Router history={hashHistory}> 
          <Switch>
            <Route exact path="/" render={() => <div>Hi</div>} />
            {/* For each new page that we add, add a Route to that page */}
          </Switch>
        </Router> 

      </div>

    );

  }
};

// The front end for this one will be page / component based
// Each route will link to a new page
  // each page will be composed of components