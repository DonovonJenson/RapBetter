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
    this.resultClickHandler = this.resultClickHandler.bind(this);
  }

  keywordSearch() {
    let resultsEl = document.getElementsByClassName('jumbotron-form-results')[0];
    let inputEl = document.getElementById('jumbotron-form-input');
    let keyword = inputEl.value;

    let toggled = resultsEl.classList.value.includes('results-in');

    let toggleElements = () => {
      resultsEl.classList.toggle('results-in');
      inputEl.classList.toggle('results-in');
    };

    if (keyword === '') {
      toggled ? toggleElements() : null;
      return;
    }

    axios.post('/fetch-quick-rhymes', {word: keyword})
      .then(results => {
        if (!results.data.length) {
          this.setState({
            rhymeResults: [{word: 'no results'}]
          });
        } else {
          this.setState({
            rhymeResults: results.data
          });
        }
        toggled ? null : toggleElements();
      })
      .catch(error => {
        console.error(error);
      });
  }

  resultClickHandler(word) {
    let inputEl = document.getElementById('jumbotron-form-input');
    inputEl.value = word;
    this.keywordSearch();
  }

  render() {

    const { rhymeResults } = this.state;

    return (

      <div className="jumbotron">

        <div className="jumbotron-form-wrapper">

          <div className="jumbotron-form-title no-select">
            QUICK RHYME
          </div>

          <input id="jumbotron-form-input"
            placeholder="Enter a word to rhyme"
            onChange={ _.debounce(this.keywordSearch, 500) }
          />
          <div className="jumbotron-form-results">
            {
              rhymeResults.map((result, index) => {
                return (
                  <div className="jumbotron-form-result" key={`rhyme-result-${index}`} onClick={() => this.resultClickHandler(result.word)}>
                    {result.word}
                  </div>
                );
              })
            }
          </div>
        </div>

      </div>

    );

  }
};