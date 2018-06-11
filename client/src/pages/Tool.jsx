import React from 'react';
import axios from 'axios';
import lodash from 'lodash';

export default class Tool extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wordResults: []
    };
    this.keywordSearch = this.keywordSearch.bind(this);
  }

  keywordSearch() {
    let inputEl = document.getElementsByClassName('tool-word-input')[0];
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

        /*

          we want to make sure that we have 'good' data

        

        */ 

        this.setState({
          wordResults: results.data
        });
      })
      .catch(error => {
        console.log('An error has occurred: ', error);
      });
  }

  render() {

    console.log('Current search results: ', this.state.wordResults);


    return (

      <section id="tool-page" className="page">

        <div className="tool-wrapper">

          <div className="tool-word-wrapper">

            <div className="tool-input-wrapper">
              <input 
                className="tool-word-input"
                placeholder="Enter a word..."
                onChange={lodash.debounce(this.keywordSearch, 500)}
              />
            </div>
            <div className="tool-word-options-wrapper">
              Word Options
            </div>
            <div className="tool-word-preview-wrapper">
              Word Preview
            </div>

          </div>

          <div className="tool-player-wrapper">
            <div className="tool-wordset-wrapper">
              <div className="wordset up">
                <ul className="wordset-list">
                  <li className="wordset-item">Test Word 1</li>
                  <li className="wordset-item">Test Word 2</li>
                  <li className="wordset-item">Test Word 3</li>
                  <li className="wordset-item">Test Word 4</li>
                </ul>
              </div>
              <div className="wordset current">
                <ul className="wordset-list">
                  <li className="wordset-item">Test Word 1</li>
                  <li className="wordset-item">Test Word 2</li>
                  <li className="wordset-item">Test Word 3</li>
                  <li className="wordset-item">Test Word 4</li>
                </ul>
              </div>
              <div className="wordset down">
                <ul className="wordset-list">
                  <li className="wordset-item">Test Word 1</li>
                  <li className="wordset-item">Test Word 2</li>
                  <li className="wordset-item">Test Word 3</li>
                  <li className="wordset-item">Test Word 4</li>
                </ul>
              </div>
            </div>

            <div className="tool-music-wrapper">
              <div className="tool-video-wrapper">
                Video
              </div>
              <div className="tool-controller-wrapper">

              </div>
            </div>

          </div>
        </div>

      </section>

    );

  }

}