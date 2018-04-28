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
  <div>
    <div className="main-flexbox-inner-pages">
      <div className="courses-flex__item--text">LEARN MORE WITH ONLINE RAP CLASSES</div>
    </div>
    <div className="main-flexbox-inner-pages">
      <div className="courses-flex">
        <div className="single-course">
            <div className ="courses-flex-title"> 
              Write Your First Verse
            </div>
          <a href="https://www.udemy.com/write-your-first-rap-verse" className='half'>
            <img className="courses-image" src="./images/writeYourFirstVerseCourseImage.jpg"/>
          </a>
          <div className="courses-explanation">
            <p> A free introductory rap course. Follow this course and write your first verse in under an hour! </p>
          </div>
          <div className="courses-pricing">
            <div className="courses-pricing-title">
              <p>Price</p>
            </div>
            <div className="courses-pricing-dollars">
              <p>FREE</p>
            </div>
          </div>
        </div>
        <div className="single-course">
            <div className ="courses-flex-title"> 
              Write & Record Your First Song
            </div>
          <a href="https://www.udemy.com/writing-your-first-rap-song/?couponCode=STUDENTDISCOUNT" className='half'>
            <img className="courses-image" src="./images/writeRecordFirstSongCourseImage.jpg"/>
          </a>
          <div className="courses-explanation">
            <p>A quick start course for those wanting to write a song. No fluff, laser-focused on specifically what you need to get through your first song. </p>
          </div>
          <div className="courses-pricing">
            <div className="courses-pricing-title">
              <p>Price</p>
            </div>
            <div className="courses-pricing-dollars">
              <p>$10</p>
            </div>
          </div>
        </div>
        <div className='single-course'>
            <div className ="courses-flex-title"> 
              Rap Fundamentals
            </div>
          <a href="https://www.udemy.com/rap-fundamentals/?couponCode=Youtubers" className='half'>
            <img className="courses-image" src="./images/rapmic.jpg"/>
          </a>
          <div className="courses-explanation">
            <p>The most comprehensive course, covering everything you need to know to rap in 30 short, easy lessons</p>
          </div>
          <div className="courses-pricing">
            <div className="courses-pricing-title">
              <p>Price</p>
            </div>
            <div className="courses-pricing-dollars">
              <p>$15</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
)

export default Courses;
