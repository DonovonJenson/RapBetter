import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, hashHistory } from 'react-router-dom';

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
          </Switch>
        </Router> 

      </div>

    );

  }
}