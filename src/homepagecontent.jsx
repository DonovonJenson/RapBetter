import React from 'react';

var Homepagecontent = () => {
  return (
    <div className="homepage-grid-container"> 
      <div className="homepage-grid-container__item item-header header-titles-container">
        <div className="header-titles-container__title">Rap Better</div>
        <div className="header-titles-container__subheader-title">Here is risen the lyricism</div>
      </div>
      <div className="homepage-grid-container__item item-tool item-tool--layout">
        <div className="grid-item--spacing">
          <a className="large-button large-button__text" href="/raptool">
            <div>Rhyme</div>
          </a>
        </div>
      </div>
      <div className="homepage-grid-container__item item-tool--text item-tool-text">
        Use this tool to fuel <br/>
         your rhymes <br/>
        & <br/>
        to work your rythm 
      </div>
      <div className="homepage-grid-container__item item-tool-right item-tool--layout">
        <div className="grid-item--spacing">
          <div className="large-button--counterbalance-placeholder">
            
          </div>
        </div>
      </div>
      <div className="homepage-grid-container__item item-videos">
        <div className="video__images">
          <div className="video__images--inner-boxed-div">
            <div>
              <a href="/videos"><img className="home-page-box-image video__images--specific-photo" src="./images/dono3.jpg"/></a>
              <a href="/videos"><img className="home-page-box-image video__images--specific-photo" src="./images/dono2.jpg"/></a>
              <a href="/videos"><img className="home-page-box-image video__images--specific-photo" src="./images/dono2.jpg"/></a>
            </div>
            <div>
              <a href="/videos"><img className="home-page-box-image video__images--specific-photo" src="./images/dono1.jpg"/></a>
              <a href="/videos"><img className="home-page-box-image video__images--specific-photo" src="./images/dono4.jpg"/></a>   
            </div>  
          </div>
        </div>
      </div>
      <div className="homepage-grid-container__item item-videos--text item-videos-text">
        <p>
          Helpful Videos 
          <br/>
          &
          <br/>
          <a className="item-videos-text--course-text" href="/courses">COURSES</a>
          <br/>
        </p>
      </div>
      <div className="homepage-grid-container__item item-videos-right"></div>
      <div className="homepage-grid-container__item item-footer">
        <div className="grid-item--spacing item-footer__text">
          &#169; 2018 Donovon Jenson
        </div>
      </div>
    </div>
  )
}


export default Homepagecontent;