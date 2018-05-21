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
    // grab both the input element and the results element
    let resultsEl = document.getElementsByClassName('jumbotron-form-results')[0];
    let inputEl = document.getElementById('jumbotron-form-input');
    // extract the keyword
    let keyword = inputEl.value;
    // check if our 'results-in' class is already applied, sets a T/F Boolean
    let toggled = resultsEl.classList.value.includes('results-in');
    // create a function to centralize elements to be toggled
    let toggleElements = () => {
      resultsEl.classList.toggle('results-in');
      inputEl.classList.toggle('results-in');
    };
    // if our keyword is blank
    if (keyword === '') {
      // and our class is active, toggle it off
      // otherwise do nothing
      toggled ? toggleElements() : null;
      return;
    }
    // if we have a keyword (!== '') then fetch the results
    axios.post('/fetch/quick-rhymes', {word: keyword})
      .then(results => {
        // if there are no results
        if (!results.data.length) {
          // push a no results word to be displayed in the box
          this.setState({
            rhymeResults: [{word: 'no results'}]
          });
        } else {
          // set the rhymeResults to our results
          this.setState({
            rhymeResults: results.data
          });
        }
        // if we are not toggled, we want toggle the elements
        toggled ? null : toggleElements();
      })
      .catch(error => {
        console.error(error);
      });
  }

  resultClickHandler(word) {
    // grab the input element
    let inputEl = document.getElementById('jumbotron-form-input');
    // set the input value to the input word
    inputEl.value = word;
    // run the keyword search
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