import React from 'react';
import VideoItem from './videoItem.jsx';
import YouTube from 'react-youtube';


class Videos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videosOnVidsPage: [ 'ge0KWuwf1gA', '1auFCLoGOKs', 'dSM8EmIqpfE', 'QL-QFRKI0w4', '1auFCLoGOKs', 'GgYgX6xITIg', 'UXNfwCOSPTA', 'hJTWgEEviHc' ],
      opts: {
        height: '258',
        width: '422',
        playerVars: { 
          // https://developers.google.com/youtube/player_parameters
          // autoplay: 1
        }
      }
    };
  }

 
  render() {
    return (
        <div className="main-flexbox-inner-pages">
          {this.state.videosOnVidsPage.map((item, i) => <VideoItem options={this.state.opts} video={item} key={i}/>)}
        </div>
    )
  }
}

export default Videos;