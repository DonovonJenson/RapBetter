import React from 'react';

const Course = ({ description, image, link, price, title }) => (

  <div className="course">
    <img className="course-image" src={image}/>
    <div className="course-info-wrapper">
      <h1 className="course-title">{title}</h1>
      <div className="course-description">
        {description}
      </div>
      <div className="course-price-wrapper"> 
        <div className="course-price">
          <h2 className="price-label">
            Price
          </h2>
          <div className="price-value">
            {price}
          </div>
        </div>
        <div className="course-link-wrapper">
          <a href={link} target="_blank">
            <button className="course-button">
              View Course
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>

);

export default Course;