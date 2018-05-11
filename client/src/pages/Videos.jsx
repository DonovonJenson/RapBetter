import React from 'react';
import YouTube from 'react-youtube';

const videos = [ 'ge0KWuwf1gA', '1auFCLoGOKs', 'dSM8EmIqpfE', 'QL-QFRKI0w4', '1auFCLoGOKs', 'GgYgX6xITIg', 'UXNfwCOSPTA', 'hJTWgEEviHc' ];

const Home = (props) => {

  return (

    <div id="videos-page" className="page">

      <h1 className="page-title no-select">TUTORIALS</h1>

      <div className="videos-content-wrapper">

        <div className="video-player-wrapper">

          <div className="player-current-video">
            <YouTube videoId="ge0KWuwf1gA" opts={{height: '100%', width: '100%'}}/>
          </div>

          <div className="player-current-info-wrapper">
            <h2 className="current-info-title">
              Title: Placeholder title content
            </h2>

            <div className="current-info-description">
              <div className="description-label">
                Description
              </div>
              <div className="description-content">
                Morbi elementum vestibulum risus, vel consectetur nunc interdum non. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec cursus odio sed eleifend accumsan. Aenean dolor diam, hendrerit sit amet facilisis sed, imperdiet ut eros. Suspendisse sed convallis diam, ut fermentum enim. Pellentesque erat urna, ullamcorper euismod posuere in, molestie vitae arcu. Donec lectus diam, varius ac fermentum imperdiet, varius sit amet augue.
              </div>
            </div>
          </div>

        </div>

        <div className="videos-list-wrapper">

          {videos.map((video, index) => {
            return (
              <div key={`video-${index}-${video}`} className="videos-list-entry no-select">
                <YouTube videoId={video} opts={{height: 'auto', width: '100%'}}/>
              </div>
            );
          })}

        </div>

      </div>

    </div>

  );

}

export default Home;


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