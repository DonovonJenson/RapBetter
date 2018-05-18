import React from 'react';

import firstVerseImage from '../../public/images/writeYourFirstVerseCourseImage.jpg';
import firstSongImage from '../../public/images/writeRecordFirstSongCourseImage.jpg';
import rapFundImage from '../../public/images/rapmic.jpg';


const Home = (props) => {

  return (

    <section id="courses-page" className="page">

      <div className="courses-content-wrapper">

        <div className="courses-header-wrapper">
          <span>LEARN MORE WITH ONLINE RAP CLASSES</span>
        </div>

        <div className="courses-wrapper">

          <div className="course">
            <img className="course-image" src={firstVerseImage}/>
            <div className="course-info-wrapper">
              <h1 className="course-title">Write Your First Verse</h1>
              <div className="course-description">
                A free introductory rap course. Follow this course and write your first verse in under an hour!
              </div>
              <div className="course-price-wrapper"> 
                <div className="course-price">
                  <h2 className="price-label">
                    Price
                  </h2>
                  <div className="price-value">
                    FREE!
                  </div>
                </div>
                <div className="course-link-wrapper">
                  <a href="https://www.udemy.com/write-your-first-rap-verse" target="_blank">
                    <button className="course-button">
                      View Course
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="course">
            <img className="course-image" src={firstSongImage}/>
            <div className="course-info-wrapper">
              <h1 className="course-title">Write Your First Song</h1>
              <div className="course-description">
                A quick start course for those wanting to write a song. No fluff, laser-focused on what you need to get through your first song
              </div>
              <div className="course-price-wrapper">
                <div className="course-price">
                  <h2 className="price-label">
                    Price
                  </h2>
                  <div className="price-value">
                    $10
                  </div>
                </div>
                <div className="course-link-wrapper">
                  <a href="https://www.udemy.com/writing-your-first-rap-song/?couponCode=STUDENTDISCOUNT" target="_blank">
                    <button className="course-button">
                      View Course
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="course">
            <img className="course-image" src={rapFundImage}/>
            <div className="course-info-wrapper">
              <h1 className="course-title">Rap Fundamentals</h1>
              <div className="course-description">
                The most comprehensive course, covering everything you need to know to rap in 30 short, easy lessons
              </div>
              <div className="course-price-wrapper">
                <div className="course-price">
                  <h2 className="price-label">
                    Price
                  </h2>
                  <div className="price-value">
                    $15
                  </div>
                </div>
                <div className="course-link-wrapper">
                  <a href="https://www.udemy.com/rap-fundamentals/?couponCode=Youtubers" target="_blank">
                    <button className="course-button">
                      View Course
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>

  );

}

export default Home;