import React from 'react';

const Home = (props) => {

  return (

    <div id="videos-page" className="page">

      <div className="videos-content-wrapper">

        <div className="video-player-wrapper">

          <div className="video-player-current">

          </div>

          <div className="video-player-current-description">

          </div>

        </div>

        <div className="videos-list-wrapper">

          {/* Here will be the dynamic list for all the videos */}

        </div>

      </div>

    </div>

  );

}

export default Home;