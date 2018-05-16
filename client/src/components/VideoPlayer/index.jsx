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
              {
                description.split('\n').map((item, key) => {
                  return (
                    <span key={key}>
                      {item}
                      <br/>
                    </span>
                  )
                })
              }
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