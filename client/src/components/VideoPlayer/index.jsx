import React from 'react';
import YouTube from 'react-youtube';

export default class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    if (!this.props.video) {
      return <div className="video-player-wrapper"/>;
    }

    const { video } = this.props;

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
        </div>

      </div>

    );

  }

};