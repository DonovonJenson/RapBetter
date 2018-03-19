import React from 'react';
import YouTube from 'react-youtube';


var Raptools = () => {
  var optsHere: {
        height: '258',
        width: '422',
        playerVars: { 
          // https://developers.google.com/youtube/player_parameters
          // autoplay: 1
        }
      }
  return (
    <div className="inner-pages-title-center">
      <div className="main-title-inner-pages">
        <div className="main-title-inner-pages--content">
          <div className="header-titles-container__title">Rap Better</div>
          <div className="header-titles-container__subheader-title">Here is risen the lyricism</div>
        </div>
      </div>
      <div className="main-flexbox-inner-pages">
        <div className="rap-tool-main-flex">
          <div className="rap-tool__title">
            Rap Better Rap Tool
          </div>
          <div className="rap-tool__word">
            <div>WORD TO USE</div>
          </div>
          <div className="rap-tool__rhyme-helpers">
            <div className="rap-tool__words__specific-word">
              <div>WORD #1 sfakdlhf</div>
            </div>
            <div className="rap-tool__words__specific-word">
              <div>WORD #2 asfaasdfasd</div>
            </div>
            <div className="rap-tool__words__specific-word">
              <div>WORD #3 fsaksadkjh</div>
            </div>
            <div className="rap-tool__words__specific-word">
              <div>WORD #4 jgjkgkjg</div>
            </div>
          </div>
          <div className="rap-tool__control-buttons">
            <div className="rap-tool__control-buttons__specific-button">
              PLAY
            </div>
            <div className="rap-tool__control-buttons__specific-button">
              FASTER
            </div>
            <div className="rap-tool__control-buttons__specific-button">
              SLOWER
            </div>
            <div className="rap-tool__control-buttons__specific-button">
              DELETE RHYMESET!
            </div>
          </div>
          <div className="rap-tool__music-video">
            <YouTube
              videoId="R-htXEscocE"
              opts={optsHere}
            />
          </div>
        </div>
      </div>
    </div>
  )
};


export default Raptools;