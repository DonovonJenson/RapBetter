import React from 'react'

var testSprite  = {
      width: '40px',
      height: '40px',
      background: `url(twobytwoTransparent.gif) 0 0`
    }

var About = () => {
  return (
      <div className="main-flexbox-inner-pages">
        <div className="about-page-flexbox">     
          <img className="about-image" src="./images/donovonjenson.jpg"/>
          <div className="about-text">
            <div className="about-text--overall-height-container">
              <p>
                Hey, thanks for taking the time to check out the site! Rap Better is a project dedicated to refining the technical aspects of rapping. 
                My goal is to create content that makes it extremely simple to divide rap into individual skills.
                Once these skills are extracted, the next step is creating tools to practice and improve, that's the goal of this site.
              </p>
              <p>
                I go by Dono and I've been rapping for over ten years and teaching for more than five. 
                I've been making Youtube videos for much of that time and the regular practice allows me to simplify context as well as I can.
                I don't want to rant forever, so if you need anything just reach out and let me know! 
              </p>
            </div>
          </div>
        </div>
  </div>
)}

export default About;