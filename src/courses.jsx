// import rapmic from './images/rapmic.jpg'
// <img src={rapmic}/>

import React from 'react'
// AUTO SCROLL DOWN
var done = false;
var currentScrollY;
var scroll = setInterval(function(){ 
  if (done === false) {
    window.scrollBy(0,2); 
    (currentScrollY === window.scrollY)? done = true : currentScrollY= window.scrollY;   
  }
}, 100);

var Courses = () => (
  <div className="inner-pages-title-center">
    <div className="main-title-inner-pages">
      <div className="main-title-inner-pages--content">
        <div className="header-titles-container__title">Rap Better</div>
        <div className="header-titles-container__subheader-title">Here is risen the lyricism</div>
      </div>
    </div>
    <div className="main-flexbox-inner-pages">
      <div className="courses-flex__item--text">LEARN MORE WITH ONLINE RAP CLASSES</div>
    </div>
    <div className="main-flexbox-inner-pages">
      <div className="courses-flex">
        <img className="courses-image" src="./images/writeYourFirstVerseCourseImage.jpg"/>
        <img className="courses-image" src="./images/writeRecordFirstSongCourseImage.jpg"/>
        <img className="courses-image" src="./images/rapmic.jpg"/>
      </div>
    </div>
    <div className="main-flexbox-inner-pages">
      <div className="courses-flex__item--text">SIGN UP HERE</div>
    </div>
  </div>
)

export default Courses;
