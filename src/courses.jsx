// import rapmic from './images/rapmic.jpg'
// <img src={rapmic}/>

import React from 'react'
// AUTO SCROLL DOWN
// var done = false;
// var currentScrollY;
// var scroll = setInterval(function(){ 
//   if (done === false) {
//     window.scrollBy(0,2); 
//     (currentScrollY === window.scrollY)? done = true : currentScrollY= window.scrollY;   
//   }
// }, 100);

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
        <div className="single-course">
            <div className ="courses-flex-title"> 
              Write Your First Verse - FREE
            </div>
          <a href="https://www.udemy.com/write-your-first-rap-verse" className='half'>
            <img className="courses-image" src="./images/writeYourFirstVerseCourseImage.jpg"/>
          </a>
          <div className="courses-explanation">
            Eventually, stuff!
          </div>
        </div>
        <div className="single-course">
            <div className ="courses-flex-title"> 
              Write & Record Your First Song - $10
            </div>
          <a href="https://www.udemy.com/writing-your-first-rap-song/?couponCode=STUDENTDISCOUNT" className='half'>
            <img className="courses-image" src="./images/writeRecordFirstSongCourseImage.jpg"/>
          </a>
          <div className="courses-explanation">
            Eventually, stuff!
          </div>
          <div className="courses-pricing">
            Hunnerd
          </div>
        </div>
        <div className='single-course'>
            <div className ="courses-flex-title"> 
              Rap Fundamentals - $15
            </div>
          <a href="https://www.udemy.com/rap-fundamentals/?couponCode=Youtubers" className='half'>
            <img className="courses-image" src="./images/rapmic.jpg"/>
          </a>
          <div className="courses-explanation">
            Eventually, stuff!
          </div>
        </div>
      </div>
    </div>
    <div className="main-flexbox-inner-pages">
    </div>
  </div>
)

export default Courses;
