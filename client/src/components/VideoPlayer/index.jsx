import React from 'react';
import YouTube from 'react-youtube';

export default class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      descriptionToggle: false
    };
    this.buildDescriptionElement = this.buildDescriptionElement.bind(this);
    this.buildDescriptionLink = this.buildDescriptionLink.bind(this);
    this.renderDescription = this.renderDescription.bind(this);
    this.toggleDescriptionContainer = this.toggleDescriptionContainer.bind(this);
  }

  buildDescriptionElement(string, key) {
    return (
      <span key={key}>
        {string}
        <br/>
      </span>
    );
  }

  buildDescriptionLink(string, key) {
    let sliceIndex = string.indexOf('http');
    let text = string.slice(0, sliceIndex);
    let link = string.slice(sliceIndex);
    let remainder = '';

    let testSplit = link.split(' ');

    if (testSplit.length > 1) {
      link = testSplit[0];
      link = link.replace(/,/g, ' ');
      remainder = testSplit.slice(1).join(' ');
    }

    return (
      <span key={key}>
        {text}<a className="description-link" href={link}>{link}</a>{remainder}
        <br/>
      </span>
    );
  }

  renderDescription(description) {
    return description.split('\n').map((line, key) => {
      let linkRegex = /(http(s?))\:\/\//gi;
      let linkToggle = linkRegex.test(line);
      return linkToggle ? this.buildDescriptionLink(line, key) : this.buildDescriptionElement(line, key);
    })
  }

  toggleDescriptionContainer() {

    let infoWrapper = document.getElementsByClassName('player-current-info-wrapper')[0];
    let descriptionContent = document.getElementsByClassName('description-content')[0];

    let currentToggle = this.state.descriptionToggle;

    this.setState({
      descriptionToggle: !currentToggle
    }, () => {
      [infoWrapper, descriptionContent].forEach(el => {
        el.classList.toggle('toggled');
      });
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