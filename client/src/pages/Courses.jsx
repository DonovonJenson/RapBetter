import React from 'react';

import firstVerseImage from '../../public/images/writeYourFirstVerseCourseImage.jpg';
import firstSongImage from '../../public/images/writeRecordFirstSongCourseImage.jpg';
import rapFundImage from '../../public/images/rapmic.jpg';


const Home = (props) => {

  return (

    <section id="courses-page" className="page">

      <h1 className="page-title no-select">COURSES</h1>

      <div className="courses-content-wrapper">

        <div className="courses-header-wrapper">
          Header Block
        </div>

        <div className="courses-wrapper">
          <div className="course">
            <img className="course-image" src={firstVerseImage}/>
          </div>
          <div className="course">
            <img className="course-image" src={firstSongImage}/>
          </div>
          <div className="course">
            <img className="course-image" src={rapFundImage}/>
          </div>
        </div>

      </div>

    </section>

  );

}

export default Home;