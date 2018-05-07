import React from 'react';
import axios from 'axios';

import Jumbotron from '../components/Jumbotron';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.testWordFetch = this.testWordFetch.bind(this);
  }

  testWordFetch() {
    axios.post('/fetch-quick-rhymes', {word: 'hello'})
      .then(results => {
        console.log(results);
      });
  }


  render() {

    return (

      <section id="home-page">

        <Jumbotron />

        <div className="page">

          <button onClick={this.testWordFetch}>TEST RHYMES</button>

        </div>

      </section>

    );

  }

}