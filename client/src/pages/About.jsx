import React from 'react';

const About = (props) => {

  return (

    <section id="about-page" className="page">

      <div className="about-content-wrapper">

        <div className="about-image" />

        <div className="about-text-wrapper">
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

    </section>

  );

}

export default About;