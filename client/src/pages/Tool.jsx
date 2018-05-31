import React from 'react';
import axios from 'axios';

export default class Tool extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.get('/tool/get-rhymes')
      .then(results => {
        console.log('results from query: ', results);
      })
      .catch(error => {
        console.log('An error has occurred: ', error);
      });
  }

  render() {

    return (

      <section id="tool-page" className="page">

        <div className="tool-word-input-wrapper">
          Input
        </div>

        <div className="tool-rapset-wrapper">
          Rap Set
        </div>

        <div className="tool-controls-wrapper">
          Controls
        </div>

      </section>

    );

  }

}