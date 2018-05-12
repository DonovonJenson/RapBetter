import React from 'react';
import axios from 'axios';
// import YouTube from 'react-youtube';

import VideoPlayer from '../components/VideoPlayer';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.fetchVideos = this.fetchVideos.bind(this);
    this.state = {
      selectedIndex: 0,
      filter: 'newest',
      maxResults: 25,
      videos: []
    };
  }

  componentWillMount() {
    this.fetchVideos();
  }

  fetchVideos() {
    let { filter, maxResults } = this.state;
    axios.post('/fetch/videos', {filter, maxResults})
      .then(results => {
        this.setState({
          videos: results.data
        });
      })
      .catch(error => {
        console.error('error: ', error);
      });
  }

  render() {

    const { videos } = this.state;

    return (

      <section id="videos-page" className="page">

        <h1 className="page-title no-select">TUTORIALS</h1>

        <div className="videos-content-wrapper">

          <VideoPlayer 
            video={videos[0]}
          />

          <div className="videos-list-wrapper">

            {videos.map((video, index) => {
              return (
                <div key={`video-${index}-${video}`} className="videos-list-entry no-select">
                  Entry
                </div>
              );
            })}

          </div>

        </div>

      </section>

    );

  }

};


// <div className="videos-list-entry">
//   Entry 1
// </div>
// <div className="videos-list-entry">
//   Entry 2
// </div>
// <div className="videos-list-entry">
//   Entry 3
// </div>
// <div className="videos-list-entry">
//   Entry 4
// </div>
// <div className="videos-list-entry">
//   Entry 5
// </div>
// <div className="videos-list-entry">
//   Entry 6
// </div>
// <div className="videos-list-entry">
//   Entry 7
// </div>