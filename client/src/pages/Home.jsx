import React from 'react';
import axios from 'axios';

import Jumbotron from '../components/Jumbotron';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (

      <section id="home-page">

        <Jumbotron />

        <div className="page">

          HOME PAGE

        </div>

      </section>

    );

  }

};