import React from 'react';
import axios from 'axios';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.testWordFetch = this.testWordFetch.bind(this);
  }

  testWordFetch() {
    axios.post('/fetchRhymes', {word: 'hello'})
      .then(results => {
        console.log(results);
      });
  }


  render() {

    return (

      <div id="home-page">

        <div className="jumbotron"/>

        <div className="page">

          <button onClick={this.testWordFetch}>TEST RHYMES</button>

        </div>

      </div>

    );

  }

}