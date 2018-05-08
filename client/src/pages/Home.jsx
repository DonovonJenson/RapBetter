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

        <section id="rap-tool" className="page">

          RAP TOOL

        </section>

        <section id="tutorials" className="page">

          TUTORIALS

        </section>

        <section id="courses" className="page">

          FULL COURSES

        </section>

      </section>

    );

  }

};