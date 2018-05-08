import React from 'react';
import axios from 'axios';
import _ from 'lodash';

export default class Jumbotron extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rhymeResults: []
    };
    this.keywordSearch = this.keywordSearch.bind(this);
  }

  keywordSearch() {
    let keyword = document.getElementById('jumbotron-form-input').value;
    let resultsEl = document.getElementsByClassName('jumbotron-form-results')[0];

    let toggled = resultsEl.classList.value.includes('results-in');

    if (keyword === '') {
      toggled ? resultsEl.classList.toggle('results-in') : null;
      return;
    }

    axios.post('/fetch-quick-rhymes', {word: keyword})
      .then(results => {
        if (!results.data.length) {
          toggled ? null : resultsEl.classList.toggle('results-in');
          this.setState({
            rhymeResults: [{word: 'no results'}]
          });
        } else {
          toggled ? null : resultsEl.classList.toggle('results-in');
          this.setState({
            rhymeResults: results.data
          });
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {

    const { rhymeResults } = this.state;

    return (

      <div className="jumbotron">

        <div className="jumbotron-form-wrapper">

          <div className="jumbotron-form-title no-select">
            QUICK RHYME
          </div>

          <input
            id="jumbotron-form-input"
            placeholder="Enter a word to rhyme"
            onChange={ _.debounce(this.keywordSearch, 500) }
          />
          <div className="jumbotron-form-results">
            {
              rhymeResults.map((result, index) => {
                return (
                  <div key={`rhyme-result-${index}`} className="jumbotron-form-result">{result.word}</div>
                );
              })
            }
          </div>
        </div>

      </div>

    );

  }
};