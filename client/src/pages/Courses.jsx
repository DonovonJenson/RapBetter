import React from 'react';

import Course from '../components/Course';

import firstVerseImage from '../../public/images/writeYourFirstVerseCourseImage.jpg';
import firstSongImage from '../../public/images/writeRecordFirstSongCourseImage.jpg';
import rapFundImage from '../../public/images/rapmic.jpg';

const courses = [
  {
    description: 'A free introductory rap course. Follow this course and write your first verse in under an hour!',
    image: firstVerseImage,
    link: 'https://www.udemy.com/write-your-first-rap-verse',
    price: 'FREE!',
    title: 'Write Your First Verse'
  },
  {
    description: 'A quick start course for those wanting to write a song. No fluff, laser-focused on what you need to get through your first song',
    image: firstSongImage,
    link: 'https://www.udemy.com/writing-your-first-rap-song/?couponCode=STUDENTDISCOUNT',
    price: '$10',
    title: 'Write Your First Song'
  },
  {
    description: 'The most comprehensive course, covering everything you need to know to rap in 30 short, easy lessons',
    image: rapFundImage,
    link: 'https://www.udemy.com/rap-fundamentals/?couponCode=Youtubers',
    price: '$15',
    title: 'Write Your First Verse'
  }
];


const Courses = (props) => {

  return (

    <section id="courses-page" className="page">

      <div className="courses-content-wrapper">

        <div className="courses-header-wrapper">
          <span>LEARN MORE WITH ONLINE RAP CLASSES</span>
        </div>

        <div className="courses-wrapper">
          {
            courses.map((course, index) => {
              return (
                <Course
                  key={`course-${index}`}
                  description={course.description}
                  image={course.image}
                  link={course.link}
                  price={course.price}
                  title={course.title}
                />
              );
            })
          }
        </div>

      </div>

    </section>

  );

};

export default Courses;

