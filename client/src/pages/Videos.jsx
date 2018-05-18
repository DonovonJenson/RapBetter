import React from 'react';
import axios from 'axios';

import VideoPlayer from '../components/VideoPlayer';
import VideoListEntry from '../components/VideoListEntry';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'newest',
      maxResults: 25,
      selectedIndex: 0,
      videos: []
    };
    this.fetchVideos = this.fetchVideos.bind(this);
    this.setCurrentIndex = this.setCurrentIndex.bind(this);
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

  setCurrentIndex(index) {
    window.scrollTo(0, 0);
    this.setState({
      selectedIndex: index
    });
  }

  render() {

    const { selectedIndex, expanded, videos } = this.state;
    const { isMobile } = this.props;

    return (

      <section id="videos-page" className="page">

        <h1 className="page-title no-select">TUTORIALS</h1>

        <div className="videos-content-wrapper">

          <VideoPlayer
            isMobile={isMobile}
            video={videos[selectedIndex]}
          />

          <div className="videos-list-wrapper">
            {
              videos.map((video, index) => {
                return (
                  <VideoListEntry
                    key={`video-${index}`}
                    clickHandler={this.setCurrentIndex}
                    index={index}
                    selectedIndex={selectedIndex}
                    video={videos[index]}
                  />
                );
              })
            }
          </div>

        </div>

      </section>

    );

  }

};
