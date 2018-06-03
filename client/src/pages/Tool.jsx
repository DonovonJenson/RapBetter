import React from 'react';
import axios from 'axios';
import _ from 'lodash';

export default class Tool extends React.Component {
  constructor(props) {
    super(props);
    this.keywordSearch = this.keywordSearch.bind(this);
  }

  keywordSearch() {
    let inputEl = document.getElementById('tool-word-input');
    let keyword = inputEl.value;

    if (keyword === '') {
      return;
    }

    axios.get('/tool/fetch-rhymes', {
      params: {
        word: keyword
      }
    })
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
          <input id="tool-word-input" onChange={_.debounce(this.keywordSearch, 500)}/>
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