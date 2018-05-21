import React from 'react';
import YouTube from 'react-youtube';

export default class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      descriptionToggle: false
    };
    this.toggleDescriptionContainer = this.toggleDescriptionContainer.bind(this);
  }

  toggleDescriptionContainer() {
    this.buildDescriptionElement = this.buildDescriptionElement.bind(this);
    this.buildDescriptionLink = this.buildDescriptionLink.bind(this);
    this.renderDescription = this.renderDescription.bind(this);
    this.toggleDescriptionContainer = this.toggleDescriptionContainer.bind(this);
  }

  buildDescriptionElement(string, key) {
    // this method returns a default container element that will break for each new line character
    return (
      <span key={key}>
        {string}
        <br/>
      </span>
    );
  }

  buildDescriptionLink(string, key) {
    // this method will look for a link inside the text of the string, slice it out, and format a return element

    // find the index of where http occurs within the string
    let sliceIndex = string.indexOf('http');
    /* 
      slice out the beginning of the string through the slice index
      
      if the sliceIndex is 0, slicing from (0, 0) will give us an empty string

    */
    let text = string.slice(0, sliceIndex);
    // slice out the link starting at the slice index
    let link = string.slice(sliceIndex);
    // declare a remainder
    let remainder = '';

    // splits the string by every space
    let testSplit = link.split(' ');


    /*

      If the testSplit's length is greater than 1, 
      that means the string containing our link contained text after the link, and we need to handle it

      Edge case: a comma after the link -- e.g. 'http://link.com, go see it!'

      once we do the split, the first element in the array will always be the link, since we sliced from its start
      we want to look in that link, and replace any commas at the end with a space

      then, we will create the remainder of the string after the link by joining everything after the first element with a space

    */
    if (testSplit.length > 1) {
      link = testSplit[0];
      link = link.replace(/,/g, ' ');
      remainder = testSplit.slice(1).join(' ');
    }

    // construct the return element, placing the link inbetween the text and remainder strings
    return (
      <span key={key}>
        {text}<a className="description-link" href={link}>{link}</a>{remainder}
        <br/>
      </span>
    );
  }

  renderDescription(description) {
    // this method takes in a description string that includes line breaks, splits them apart and renders the corresponding element

    // split the string by every line break, then map over the subsequent array
    return description.split('\n').map((line, key) => {
      // test the current line against the regex
      let linkRegex = /(http(s?))\:\/\//gi;
      let linkFound = linkRegex.test(line);
      // if link is found, build a description link, otherwise build a regular description line
      return linkFound ? this.buildDescriptionLink(line, key) : this.buildDescriptionElement(line, key);
    })
  }

  toggleDescriptionContainer() {
    // grab the elements to toggle
    let descriptionContent = document.getElementsByClassName('description-content')[0];
    let infoWrapper = document.getElementsByClassName('player-current-info-wrapper')[0];

    // grab the toggle from the state
    let currentToggle = this.state.descriptionToggle;

    // set the toggle to the opposite of what its current state is
    this.setState({
      descriptionToggle: !currentToggle
    }, () => {
      // then toggle the elements 'toggled' class
      descriptionContent.classList.toggle('toggled');
      infoWrapper.classList.toggle('toggled');
    });

  }

  render() {

    if (!this.props.video) {
      return <div className="video-player-wrapper"/>;
    }

    const { descriptionToggle } = this.state;
    const { isMobile, video } = this.props;

    let videoId = video.contentDetails.videoId;
    let { title, description } = video.snippet;

    return (

      <div className="video-player-wrapper">

        <div className="player-current-video">
          <YouTube videoId={videoId} opts={{height: '100%', width: '100%'}}/>
        </div>

        <div className="player-current-info-wrapper">
          <h2 className="current-info-title">
            {title}
          </h2>

          <div className="current-info-description">
            <div className="description-content">
              {this.renderDescription(description)}
            </div>
          </div>
          {
            isMobile ?
              <button className="description-collapse-toggle" onClick={this.toggleDescriptionContainer}>{descriptionToggle ? 'Collapse' : 'Expand'}</button> :
              <div className="description-spacer"/>
          }
        </div>

      </div>

    );

  }

};